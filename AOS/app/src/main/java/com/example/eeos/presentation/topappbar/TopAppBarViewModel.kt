package com.example.eeos.presentation.topappbar

import androidx.compose.material3.SnackbarDuration
import androidx.compose.material3.SnackbarHostState
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.eeos.consts.SnackBarMessage
import com.example.eeos.data.model.remote.request.RequestPutActiveStatusDto
import com.example.eeos.domain.repository.InfoRepository
import dagger.hilt.android.lifecycle.HiltViewModel
import java.io.IOException
import javax.inject.Inject
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import retrofit2.HttpException

data class TopAppBarUiState(
    val isEmpty: Boolean = false,
    val isLoading: Boolean = false,

    val name: String = "",
    val activeStatus: String = "",

    val snackbarHostState: SnackbarHostState = SnackbarHostState()
)

@HiltViewModel
class TopAppBarViewModel @Inject constructor(
    private val infoRepository: InfoRepository
) : ViewModel() {
    private val _topAppBarUiState = MutableStateFlow(TopAppBarUiState())
    val topAppBarUiState = _topAppBarUiState.asStateFlow()

    init {
        getActiveStatus()
    }

    private fun getActiveStatus() {
        viewModelScope.launch {
            infoRepository.getActiveStatus()
                .onSuccess { userInfo ->
                    _topAppBarUiState.update { currentState ->
                        currentState.copy(
                            name = userInfo.name,
                            activeStatus = userInfo.activeStatus
                        )
                    }
                }
                .onFailure { exception ->
                    when (exception) {
                        is HttpException -> {
                            _topAppBarUiState.update { currentState ->
                                currentState.copy(
                                    isEmpty = true
                                )
                            }
                        }

                        is IOException -> {
                            _topAppBarUiState.update { currentState ->
                                currentState.copy(
                                    isEmpty = true
                                )
                            }
                        }
                    }
                }
        }
    }

    fun putActiveStatus(activeStatus: String) {
        viewModelScope.launch {
            infoRepository.putActiveStatus(
                RequestPutActiveStatusDto(
                    activeStatus = activeStatus
                )
            )
                .onSuccess {
                    getActiveStatus()
                    _topAppBarUiState.value.snackbarHostState
                        .showSnackbar(
                            message = SnackBarMessage.onActiveStatusChanged,
                            duration = SnackbarDuration.Short
                        )
                }.onFailure { exception ->
                    when (exception) {
                        is HttpException -> {
                            _topAppBarUiState.update { currentState ->
                                currentState.copy(
                                    isEmpty = true
                                )
                            }
                        }

                        is IOException -> {
                            _topAppBarUiState.update { currentState ->
                                currentState.copy(
                                    isEmpty = true
                                )
                            }
                        }
                    }
                }
        }
    }
}
