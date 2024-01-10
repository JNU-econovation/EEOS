package com.example.eeos.presentation.login

import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.dimensionResource
import androidx.compose.ui.res.stringResource
import com.example.eeos.R

@Composable
fun LoginLoadingScreen() {
    CircularProgressIndicator()
    Spacer(
        modifier = Modifier
            .height(
                dimensionResource(
                    id = R.dimen.height_login_screen_between_progress_and_text
                )
            )
    )
    Text(
        text = stringResource(R.string.login_try_login),
        style = MaterialTheme.typography.bodySmall,
        color = colorResource(R.color.gray_700)
    )
}
