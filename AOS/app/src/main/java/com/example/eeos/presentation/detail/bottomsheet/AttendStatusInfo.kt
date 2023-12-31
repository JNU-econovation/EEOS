package com.example.eeos.presentation.detail.bottomsheet

import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.width
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.dimensionResource
import androidx.compose.ui.tooling.preview.Preview
import com.example.eeos.R
import com.example.eeos.consts.AttendStatus
import com.example.eeos.domain.model.Member

@Composable
fun AttendStatusInfo(
    memberInfo: Member,
    attendStatusChip: @Composable () -> Unit
) {
    val infoText = "$${memberInfo.name} 님"

    Row(
        verticalAlignment = Alignment.CenterVertically
    ) {
        Text(
            text = infoText,
            style = MaterialTheme.typography.titleSmall,
            color = colorResource(R.color.paragraph)
        )
        Spacer(
            modifier = Modifier.width(
                width = dimensionResource(
                    id = R.dimen.margin_detail_screen_space_between_info_and_chip
                )
            )
        )
        attendStatusChip()
    }
}

@Preview(showBackground = true)
@Composable
private fun AttendStatusInfoPreview() {
    MaterialTheme {
        AttendStatusInfo(
            memberInfo = Member(
                name = "24기 장현지",
                attendStatus = AttendStatus.nonResponse
            )
        ) {
            AttendChip()
        }
    }
}
