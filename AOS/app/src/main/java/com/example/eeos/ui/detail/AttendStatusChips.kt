package com.example.eeos.ui.detail

import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import com.example.eeos.R

@Composable
fun AttendChip() {
    AttendStatusChip(
        buttonText = stringResource(R.string.detail_attendees),
        contentColor = colorResource(R.color.success_strong),
        containerColor = colorResource(R.color.success_light),
        isContentLong = false
    )
}

@Composable
fun LateComerChip() {
    AttendStatusChip(
        buttonText = stringResource(R.string.detail_latecomers),
        contentColor = colorResource(R.color.warning_strong),
        containerColor = colorResource(R.color.warning_light),
        isContentLong = false
    )
}

@Composable
fun AbsentChip() {
    AttendStatusChip(
        buttonText = stringResource(R.string.detail_absentees),
        contentColor = colorResource(R.color.action),
        containerColor = colorResource(R.color.action_light),
        isContentLong = false
    )
}

@Composable
fun RequestSurveyChip() {
    AttendStatusChip(
        buttonText = stringResource(R.string.detail_bottom_sheet_do_survey),
        contentColor = colorResource(R.color.tertiary_strong),
        containerColor = colorResource(R.color.tertiary),
        isContentLong = true
    )
}

@Composable
fun RequestAttendCheckChip() {
    AttendStatusChip(
        buttonText = stringResource(R.string.detail_bottom_sheet_check_attendance),
        contentColor = colorResource(R.color.tertiary_strong),
        containerColor = colorResource(R.color.secondary),
        isContentLong = true
    )
}

@Composable
fun NonRelatedChip() {
    AttendStatusChip(
        buttonText = stringResource(R.string.detail_bottom_sheet_irrelevant),
        contentColor = colorResource(R.color.stroke_400),
        containerColor = colorResource(R.color.gray_100),
        isContentLong = true
    )
}

@Preview(showBackground = true)
@Composable
private fun NonRelatedChipPreview() {
    MaterialTheme {
        RequestAttendCheckChip()
    }
}