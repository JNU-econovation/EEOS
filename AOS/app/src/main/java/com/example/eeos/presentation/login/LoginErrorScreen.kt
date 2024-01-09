package com.example.eeos.presentation.login

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.dimensionResource
import androidx.compose.ui.res.painterResource
import com.example.eeos.R

@Composable
fun LoginErrorScreen() {
    Box(
        contentAlignment = Alignment.Center
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Image(
                painter = painterResource(id = R.drawable.common_logo_icon),
                contentDescription = "에러가 발생했습니다."
            )
            Spacer(
                modifier = Modifier.height(dimensionResource(id = R.dimen.margin_common_screen))
            )
            Text(
                text = "에코노베이션 슬랙 표시 이름을 설정해주세요.",
                style = MaterialTheme.typography.bodySmall,
                color = colorResource(id = R.color.gray_700)
            )
        }
    }
}
