package com.example.eeos.presentation.login

import android.util.Log
import androidx.compose.material3.SnackbarDuration
import androidx.compose.material3.SnackbarHostState
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.eeos.EEOSApplication
import com.example.eeos.consts.SnackBarMessage
import com.example.eeos.domain.repository.AuthRepository
import dagger.hilt.android.lifecycle.HiltViewModel
import java.io.IOException
import javax.inject.Inject
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import retrofit2.HttpException

data class LoginUiState(
    val isLogin: Boolean = false,
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
                isLogin = true
            )
        }
        viewModelScope.launch {
            authRepository.postLogin(
                code = code
            )
                .onSuccess { response ->
                    EEOSApplication.prefs.access = response.accessToken

                    _loginUiState.update { currentState ->
                        currentState.copy(
                            isError = false,
                            hasTokens = true,
                            isLogin = false
                        )
                    }
                }
                .onFailure { exception ->
                    Log.d("실패", "exception: $exception")
                    when (exception) {
                        is HttpException -> {
                            _loginUiState.update { currentState ->
                                currentState.copy(
                                    isError = true
                                )
                            }
                        }

                        is IOException -> {
                            _loginUiState.update { currentState ->
                                currentState.copy(
                                    isError = true
                                )
                            }
                        }
                    }
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
