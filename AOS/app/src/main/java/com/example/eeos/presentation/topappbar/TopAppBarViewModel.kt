package com.example.eeos.presentation.topappbar

import androidx.compose.material3.SnackbarDuration
import androidx.compose.material3.SnackbarHostState
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.eeos.consts.SnackBarMessage
import com.example.eeos.data.model.remote.request.RequestPutActiveStatusDto
import com.example.eeos.domain.repository.InfoRepository
import com.example.eeos.presentation.util.getErrorCode
import com.skydoves.sandwich.suspendOnError
import com.skydoves.sandwich.suspendOnException
import com.skydoves.sandwich.suspendOnSuccess
import dagger.hilt.android.lifecycle.HiltViewModel
import javax.inject.Inject
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

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
                .suspendOnSuccess {
                    val userInfo = data.data?.toActiveStatus()
                    val name = userInfo!!.name
                    val activeStatus = userInfo.activeStatus

                    _topAppBarUiState.update { currentState ->
                        currentState.copy(
                            name = name,
                            activeStatus = activeStatus
                        )
                    }
                }
                .suspendOnError {
                    val errorCode = getErrorCode(this.errorBody!!.string())

                }
                .suspendOnException {
                    this.exception
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
                .suspendOnSuccess {
                    getActiveStatus()
                    _topAppBarUiState.value.snackbarHostState
                        .showSnackbar(
                            message = SnackBarMessage.onActiveStatusChanged,
                            duration = SnackbarDuration.Short
                        )
                }
                .suspendOnError {
                    val errorCode = getErrorCode(this.errorBody!!.string())

                }
                .suspendOnException {
                    this.exception
                }
        }
    }
}
