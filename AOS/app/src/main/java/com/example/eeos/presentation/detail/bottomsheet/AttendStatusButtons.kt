package com.example.eeos.presentation.detail.bottomsheet

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.State
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.dimensionResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.hilt.navigation.compose.hiltViewModel
import com.example.eeos.R
import com.example.eeos.consts.AttendStatus
import com.example.eeos.consts.ProgramStatus
import com.example.eeos.consts.attendStatusMap
import com.example.eeos.presentation.detail.ProgramDetailUiState
import com.example.eeos.presentation.detail.ProgramDetailViewModel
import com.example.eeos.presentation.detail.confirmdialog.ConfirmAttendStatusDialog

@Composable
fun AttendStatusButtons(
    programDetailUiState: State<ProgramDetailUiState>,
    attendanceUiState: State<UserAttendStatusUiState>,
    putUserAttendStatus: (String) -> Unit
) {
    Row(
        modifier = Modifier.background(
            color = colorResource(R.color.gray_100),
            shape = RoundedCornerShape(dimensionResource(id = R.dimen.size_corner_20dp)),
        )
    ) {
        val selectedAttendStatus = attendStatusMap[attendanceUiState.value.userAttendStatus]
        val tempAttendStatus = remember { mutableStateOf("") }

        val attendStatusDialogState = remember { mutableStateOf(false) }
        if (attendStatusDialogState.value) {
            ConfirmAttendStatusDialog(
                onConfirmRequest = {
                    putUserAttendStatus(tempAttendStatus.value)
                    attendStatusDialogState.value = false
                },
                onDismissRequest = { attendStatusDialogState.value = false },
                attendStatus = attendStatusMap[tempAttendStatus.value]!!
            )
        }

        val onChangeAttendStatus = { attendStatus: String ->
            tempAttendStatus.value = attendStatus
            attendStatusDialogState.value = true
        }

        AttendButton(
            selectedAttendStatus = if (programDetailUiState.value.programStatus == ProgramStatus.end) { "" } else { selectedAttendStatus }
        ) {
            if (attendanceUiState.value.userAttendStatus != AttendStatus.nonRelated &&
                programDetailUiState.value.programStatus == ProgramStatus.active
            ) {
                onChangeAttendStatus(AttendStatus.attend)
            }
        }
        LateButton(
            selectedAttendStatus = if (programDetailUiState.value.programStatus == ProgramStatus.end) { "" } else { selectedAttendStatus }
        ) {
            if (attendanceUiState.value.userAttendStatus != AttendStatus.nonRelated &&
                programDetailUiState.value.programStatus == ProgramStatus.active
            ) {
                onChangeAttendStatus(AttendStatus.late)
            }
        }
        AbsentButton(
            selectedAttendStatus = if (programDetailUiState.value.programStatus == ProgramStatus.end) { "" } else { selectedAttendStatus }
        ) {
            if (attendanceUiState.value.userAttendStatus != AttendStatus.nonRelated &&
                programDetailUiState.value.programStatus == ProgramStatus.active
            ) {
                onChangeAttendStatus(AttendStatus.absent)
            }
        }
    }
}

@Composable
private fun AttendButton(selectedAttendStatus: String?, onClick: () -> Unit = {}) {
    AttendStatusButton(
        buttonText = stringResource(R.string.detail_attendees),
        contentColor = colorResource(R.color.success_strong),
        containerColor = colorResource(R.color.success_light),
        backgroundColor = colorResource(R.color.gray_100),
        selectedAttendStatus = selectedAttendStatus,
        onClick = onClick
    )
}

@Composable
private fun LateButton(
    selectedAttendStatus: String?,
    onClick: () -> Unit
) {
    AttendStatusButton(
        buttonText = stringResource(R.string.detail_latecomers),
        contentColor = colorResource(R.color.warning_strong),
        containerColor = colorResource(R.color.warning_light),
        backgroundColor = colorResource(R.color.gray_100),
        selectedAttendStatus = selectedAttendStatus,
        onClick = onClick
    )
}

@Composable
private fun AbsentButton(selectedAttendStatus: String?, onClick: () -> Unit) {
    AttendStatusButton(
        buttonText = stringResource(R.string.detail_absentees),
        contentColor = colorResource(R.color.action),
        containerColor = colorResource(R.color.action_light),
        backgroundColor = colorResource(R.color.gray_100),
        selectedAttendStatus = selectedAttendStatus,
        onClick = onClick
    )
}

@Preview(showBackground = true)
@Composable
private fun AttendStatusButtonsPreview() {
    MaterialTheme {
        AttendStatusButtons(
            programDetailUiState = hiltViewModel<ProgramDetailViewModel>().detailUiState.collectAsState(),
            attendanceUiState = hiltViewModel<UserAttendStatusViewModel>().userAttendStatusUiState.collectAsState(),
            putUserAttendStatus = { p1 -> },
        )
    }
}
