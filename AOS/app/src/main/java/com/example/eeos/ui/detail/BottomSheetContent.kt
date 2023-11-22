package com.example.eeos.ui.detail

import androidx.compose.foundation.Image
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
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import com.example.eeos.R

@Composable
fun BottomSheetContents() {
    Column(
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Spacer(
            modifier = Modifier.height(
                height = dimensionResource(id = R.dimen.margin_detail_screen_space_bar_vertical)
            )
        )
        Image(
            painter = painterResource(id = R.drawable.detail_bottom_sheet_bar),
            contentDescription = stringResource(R.string.detail_bottom_sheet_bar_description)
        )
        Spacer(
            modifier = Modifier.height(
                height = dimensionResource(id = R.dimen.margin_detail_screen_space_bar_vertical)
            )
        )
        Spacer(
            modifier = Modifier.height(
                height = dimensionResource(id = R.dimen.margin_detail_screen_space_attend_status_vertical)
            )
        )
        AttendStatusInfo(
            memberInfo = MemberData(
                generation = 24,
                name = "장현지",
                attendStatus = AttendStatus.NO_RESPONSE
            )
        ) { RequestAttendCheckChip() }
        Spacer(
            modifier = Modifier.height(
                height = dimensionResource(id = R.dimen.margin_detail_screen_space_attend_status_vertical)
            )
        )
        Spacer(
            modifier = Modifier.height(
                height = dimensionResource(id = R.dimen.margin_detail_screen_space_description_vertical)
            )
        )
        Text(
            text = stringResource(R.string.detail_bottom_sheet_description),
            style = MaterialTheme.typography.bodySmall,
            color = colorResource(R.color.paragraph)
        )
        Spacer(
            modifier = Modifier.height(
                height = dimensionResource(id = R.dimen.margin_detail_screen_space_description_vertical)
            )
        )
        AttendStatusButtons()
    }
}

@Preview(showSystemUi = true)
@Composable
private fun BottomSheetContentsPreview() {
    MaterialTheme {
        BottomSheetContents()
    }
}