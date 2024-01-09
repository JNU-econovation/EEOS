package com.example.eeos.presentation.login

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.SnackbarHost
import androidx.compose.runtime.Composable
import androidx.compose.runtime.State
import androidx.compose.runtime.collectAsState
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.hilt.navigation.compose.hiltViewModel

@Composable
fun LoginScreen(
    loginUiState: State<LoginUiState>,
    code: String?,
    postLogin: (String) -> Unit
) {
    if (code != null) {
        postLogin(code)
    }

    Scaffold(
        snackbarHost = { SnackbarHost(hostState = loginUiState.value.snackbarHostState) },
    ) { innerPadding ->
        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding),
            contentAlignment = Alignment.Center
        ) {
            Column(
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                if (loginUiState.value.isError) {
                    LoginErrorScreen()
                } else if (loginUiState.value.isLoading) {
                    LoginLoadingScreen()
                } else {
                    LoginOriginScreen()
                }
            }
        }
    }
}

@Preview(showSystemUi = true)
@Composable
private fun LoginScreenPreview() {
    MaterialTheme {
        LoginScreen(
            loginUiState = hiltViewModel<LoginViewModel>().loginUiState.collectAsState(),
            code = "",
            postLogin = { p -> }
        )
    }
}
