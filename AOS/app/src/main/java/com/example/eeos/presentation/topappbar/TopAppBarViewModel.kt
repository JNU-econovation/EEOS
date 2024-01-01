package com.example.eeos.presentation.topappbar

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.eeos.domain.repository.InfoRepository
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import retrofit2.HttpException
import java.io.IOException
import javax.inject.Inject

data class TopAppBarUiState(
    val isEmpty: Boolean = false,
    val isLoading: Boolean = false,

    val name: String = "",
    val activeStatus: String = ""
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
}