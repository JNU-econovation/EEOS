package com.example.eeos.presentation.detail.bottomsheet

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
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
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.hilt.navigation.compose.hiltViewModel
import com.example.eeos.R
import com.example.eeos.consts.AttendStatus
import com.example.eeos.domain.model.Member
import com.example.eeos.presentation.detail.ProgramDetailUiState
import com.example.eeos.presentation.detail.ProgramDetailViewModel

@Composable
fun SheetDragHandle() {
    Column {
        Spacer(
            modifier = Modifier.height(
                dimensionResource(id = R.dimen.margin_detail_screen_space_bar_top)
            )
        )
        Image(
            painterResource(id = R.drawable.detail_bottom_sheet_drag_handle),
            stringResource(R.string.detail_bottom_sheet_drag_handle_description)
        )
        Spacer(
            modifier = Modifier.height(
                dimensionResource(id = R.dimen.margin_detail_screen_space_bar_bottom)
            )
        )
    }
}

@Composable
fun BottomSheetContents(
    programDetailUiState: State<ProgramDetailUiState>,
    attendanceUiState: State<UserAttendStatusUiState>,
    putUserAttendStatus: (String) -> Unit
) {
    Column(
        modifier = Modifier.fillMaxWidth(),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        AttendStatusInfo(
            memberInfo = Member(
                name = attendanceUiState.value.userName,
                attendStatus = attendanceUiState.value.userAttendStatus
            )
        ) {
            when (attendanceUiState.value.userAttendStatus) {
                AttendStatus.attend -> AttendChip()
                AttendStatus.absent -> AbsentChip()
                AttendStatus.late -> LateComerChip()
                AttendStatus.nonRelated -> NonRelatedChip()
                AttendStatus.nonResponse ->
                    if (programDetailUiState.value.programType == "demand") {
                        RequestSurveyChip()
                    } else {
                        RequestAttendCheckChip()
                    }
            }
        }
        Spacer(
            modifier = Modifier.height(
                height = dimensionResource(
                    id = R.dimen.margin_detail_screen_space_between_info_and_chip
                )
            )
        )
        Spacer(
            modifier = Modifier.height(
                height = dimensionResource(
                    id = R.dimen.margin_detail_screen_space_description_vertical
                )
            )
        )
        Text(
            text = stringResource(R.string.detail_bottom_sheet_description),
            style = MaterialTheme.typography.bodySmall,
            color = colorResource(R.color.paragraph)
        )
        Spacer(
            modifier = Modifier.height(
                height = dimensionResource(
                    id = R.dimen.margin_detail_screen_space_description_vertical
                )
            )
        )
        AttendStatusButtons(
            attendanceUiState = attendanceUiState,
            putUserAttendStatus = putUserAttendStatus
        )
        Spacer(
            modifier = Modifier.height(
                height = dimensionResource(
                    id = R.dimen.margin_detail_screen_space_attend_status_buttons_vertical
                )
            )
        )
    }
}

@Preview(showSystemUi = true)
@Composable
private fun BottomSheetContentsPreview() {
    MaterialTheme {
        BottomSheetContents(
            attendanceUiState = hiltViewModel<UserAttendStatusViewModel>().userAttendStatusUiState.collectAsState(),
            programDetailUiState = hiltViewModel<ProgramDetailViewModel>().detailUiState.collectAsState(),
            putUserAttendStatus = { p -> }
        )
    }
}
