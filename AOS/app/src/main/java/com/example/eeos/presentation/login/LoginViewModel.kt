package com.example.eeos.presentation.login

import androidx.compose.material3.SnackbarDuration
import androidx.compose.material3.SnackbarHostState
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.eeos.EEOSApplication
import com.example.eeos.consts.SnackBarMessage
import com.example.eeos.consts.USER_NAME_INVALID
import com.example.eeos.domain.repository.AuthRepository
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

data class LoginUiState(
    val isLoading: Boolean = false,
    val isError: Boolean = false,
    val hasTokens: Boolean = false,

    val snackbarHostState: SnackbarHostState = SnackbarHostState()
)

@HiltViewModel
class LoginViewModel @Inject constructor(
    private val authRepository: AuthRepository,
) : ViewModel() {
    private val _loginUiState = MutableStateFlow(LoginUiState())
    val loginUiState = _loginUiState.asStateFlow()

    fun postLogin(code: String) {
        _loginUiState.update { currentState ->
            currentState.copy(
                isLoading = true
            )
        }
        viewModelScope.launch {
            authRepository.postLogin(
                code = code
            )
                .suspendOnSuccess {
                    EEOSApplication.prefs.access = data.data?.accessToken

                    _loginUiState.update { currentState ->
                        currentState.copy(
                            isError = false,
                            hasTokens = true,
                            isLoading = false
                        )
                    }
                }
                .suspendOnError {
                    val errorCode = getErrorCode(this.errorBody!!.string())
                    if (errorCode == USER_NAME_INVALID) {
                        _loginUiState.update { currentState ->
                            currentState.copy(
                                isError = true
                            )
                        }
                    }
                }
                .suspendOnException {
                    this.exception
                }
        }
    }

    fun onLogout() {
        viewModelScope.launch {
            _loginUiState.value.snackbarHostState
                .showSnackbar(
                    message = SnackBarMessage.onLogout,
                    duration = SnackbarDuration.Short
                )
        }
    }
}
