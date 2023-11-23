package com.example.eeos.ui.detail

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.dimensionResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import com.example.eeos.R

@Composable
fun AttendStatusButtons() {
    Row(
        modifier = Modifier.background(
            color = colorResource(R.color.gray_100),
            shape = RoundedCornerShape(dimensionResource(id = R.dimen.size_corner_20dp)),
        )
    ) {
        AttendButton() {}
        LateComeButton() {}
        AbsentButton() {}
    }
}

@Composable
private fun AttendButton(onClick: () -> Unit) {
    AttendStatusButton(
        buttonText = stringResource(R.string.detail_attendees),
        contentColor = colorResource(R.color.success_strong),
        containerColor = colorResource(R.color.success_light),
        backgroundColor = colorResource(R.color.gray_100),
        isSelected = true,
        onClick = onClick
    )
}

@Composable
private fun LateComeButton(onClick: () -> Unit) {
    AttendStatusButton(
        buttonText = stringResource(R.string.detail_latecomers),
        contentColor = colorResource(R.color.warning_strong),
        containerColor = colorResource(R.color.warning_light),
        backgroundColor = colorResource(R.color.gray_100),
        isSelected = false,
        onClick = onClick
    )
}

@Composable
private fun AbsentButton(onClick: () -> Unit) {
    AttendStatusButton(
        buttonText = stringResource(R.string.detail_absentees),
        contentColor = colorResource(R.color.action),
        containerColor = colorResource(R.color.action_light),
        backgroundColor = colorResource(R.color.gray_100),
        isSelected = false,
        onClick = onClick
    )
}


@Preview(showBackground = true)
@Composable
private fun AttendStatusButtonsPreview() {
    MaterialTheme {
        AttendStatusButtons()
    }
}