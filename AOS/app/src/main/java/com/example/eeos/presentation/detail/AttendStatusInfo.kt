package com.example.eeos.presentation.detail

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

@Composable
fun AttendStatusInfo(
    memberInfo: MemberData,
    attendStatusChip: @Composable () -> Unit
) {
    val infoText = "${memberInfo.generation}기 ${memberInfo.name} 님"

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
            memberInfo = MemberData(
                generation = 24,
                name = "장현지",
                attendStatus = AttendStatus.NO_RESPONSE
            )
        ) {
            AttendChip()
        }
    }
}
