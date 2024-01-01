package com.example.eeos.presentation.topappbar

import androidx.compose.foundation.Image
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.width
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.State
import androidx.compose.runtime.collectAsState
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.dimensionResource
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.hilt.navigation.compose.hiltViewModel
import com.example.eeos.R

@Composable
fun MemberInfo(
    topAppBarUiState: State<TopAppBarUiState>,
    onClick: () -> Unit
) {
    Row(
        verticalAlignment = Alignment.CenterVertically
    ) {
        Image(
            painter = painterResource(id = R.drawable.common_mypage_button),
            contentDescription = "회원 상태 수정",
            modifier = Modifier.clickable { onClick() }
        )
        Spacer(
            modifier = Modifier.width(
                dimensionResource(
                    id = R.dimen.margin_common_screen_member_info_space_between_icon_and_text
                )
            )
        )

        Column(
            horizontalAlignment = Alignment.End
        ) {
            Text(
                text = topAppBarUiState.value.activeStatus,
                style = MaterialTheme.typography.labelSmall,
                color = colorResource(id = R.color.paragraph)
            )

            Row {
                Text(
                    text = topAppBarUiState.value.name,
                    style = MaterialTheme.typography.labelSmall,
                    color = colorResource(id = R.color.paragraph)
                )
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
private fun MemberInfoPreview() {
    MaterialTheme {
        MemberInfo(
            topAppBarUiState = hiltViewModel<TopAppBarViewModel>().topAppBarUiState.collectAsState(),
            onClick = {}
        )
    }
}
