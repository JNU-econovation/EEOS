package com.example.eeos.presentation.detail

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.BottomSheetScaffold
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.State
import androidx.compose.runtime.collectAsState
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.dimensionResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.hilt.navigation.compose.hiltViewModel
import com.example.eeos.R
import com.example.eeos.presentation.detail.bottomsheet.BottomSheetContents
import com.example.eeos.presentation.detail.bottomsheet.SheetDragHandle
import com.example.eeos.presentation.detail.bottomsheet.UserAttendStatusUiState
import com.example.eeos.presentation.detail.bottomsheet.UserAttendStatusViewModel
import com.example.eeos.presentation.topappbar.EeosTopAppBar

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun DetailScreen(
    detailUiState: State<ProgramDetailUiState>,
    memberUiState: State<MemberAttendanceUiState>,
    attendanceUiState: State<UserAttendStatusUiState>,
    putUserAttendStatus: (String) -> Unit
) {
    BottomSheetScaffold(
        sheetContent = {
            BottomSheetContents(
                programDetailUiState = detailUiState,
                attendanceUiState = attendanceUiState,
                putUserAttendStatus = putUserAttendStatus
            )
        },
        topBar = {
            EeosTopAppBar()
        },
        sheetPeekHeight = dimensionResource(id = R.dimen.height_detail_screen_sheet_peek_height),
        sheetShape = RoundedCornerShape(
            topStart = dimensionResource(id = R.dimen.size_corner_25dp),
            topEnd = dimensionResource(id = R.dimen.size_corner_25dp)
        ),
        sheetContainerColor = colorResource(id = R.color.background),
        sheetContentColor = colorResource(id = R.color.paragraph),
        sheetShadowElevation = dimensionResource(
            id = R.dimen.height_detail_screen_sheet_sheet_shadow_elevation
        ),
        sheetDragHandle = {
            SheetDragHandle()
        },
        containerColor = colorResource(id = R.color.background)
    ) {
        DetailScreenContent(
            detailUiState = detailUiState,
            memberUiState = memberUiState
        )
    }
}

@Composable
private fun DetailScreenContent(
    detailUiState: State<ProgramDetailUiState>,
    memberUiState: State<MemberAttendanceUiState>
) {
    val state = rememberScrollState()
    Row(
        modifier = Modifier
            .fillMaxSize(),
        horizontalArrangement = Arrangement.Center
    ) {
        Spacer(
            modifier = Modifier.width(
                width = dimensionResource(id = R.dimen.margin_common_screen)
            )
        )
        Column(
            modifier = Modifier.verticalScroll(state)
        ) {
            ProgramDetail(
                category = detailUiState.value.category,
                title = detailUiState.value.title,
                deadLine = detailUiState.value.deadLine,
                content = detailUiState.value.content
            )
            Spacer(
                modifier = Modifier.height(
                    height = dimensionResource(
                        id = R.dimen.margin_detail_screen_space_between_content_and_attendance
                    )
                )
            )
            MemberLists(
                memberUiState = memberUiState
            )
            Spacer(
                modifier = Modifier.height(
                    dimensionResource(R.dimen.height_detail_screen_space_bottom)
                )
            )
        }
        Spacer(
            modifier = Modifier.width(
                width = dimensionResource(id = R.dimen.margin_common_screen)
            )
        )
    }
}

@Preview(showSystemUi = true)
@Composable
private fun DetailScreenPreview() {
    MaterialTheme {
        DetailScreen(
            detailUiState = hiltViewModel<ProgramDetailViewModel>().detailUiState.collectAsState(),
            memberUiState = hiltViewModel<MemberAttendanceViewModel>().memberDetailUiState.collectAsState(),
            attendanceUiState = hiltViewModel<UserAttendStatusViewModel>().userAttendStatusUiState.collectAsState(),
            putUserAttendStatus = { p -> }
        )
    }
}
