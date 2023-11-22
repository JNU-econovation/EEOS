package com.example.eeos.ui.detail

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.BottomSheetScaffold
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.dimensionResource
import androidx.compose.ui.tooling.preview.Preview
import com.example.eeos.R
import com.example.eeos.ui.common.EeosTopAppBar

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun DetailScreen() {
    BottomSheetScaffold(
        sheetContent = { BottomSheetContents() },
        topBar = {
            EeosTopAppBar()
        },
        sheetPeekHeight = dimensionResource(id = R.dimen.height_detail_screen_sheet_peek_height),
        sheetShape = RoundedCornerShape(
            topStart = dimensionResource(id = R.dimen.size_corner_25dp),
            topEnd = dimensionResource(id = R.dimen.size_corner_25dp)
        ),
        sheetContainerColor = colorResource(id = R.color.background),
        sheetContentColor = colorResource(id = R.color.paragraph)
    ) {
        DetailScreenContent()
    }
}

@Composable
private fun DetailScreenContent() {
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
        Column {
            ProgramDetail()
            Spacer(
                modifier = Modifier.height(
                    height = dimensionResource(id = R.dimen.margin_detail_screen_space_between_content_and_attendance)
                )
            )
            MemberLists()
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
        DetailScreen()
    }
}