package com.example.eeos.ui.home

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.dimensionResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import com.example.eeos.R
import com.example.eeos.ui.common.EeosTopAppBar

val programLists: List<ProgramData> = listOf(
    ProgramData(
        date = "2023년 11월 06일 (월)",
        title = "오늘의 행사 두구두구",
        category = "주간 발표",
        isEnd = false
    ),
)

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun HomeScreen() {
    val categoryChips: List<String> = listOf(
        stringResource(R.string.home_tab_all),
        stringResource(R.string.home_tab_presentation),
        stringResource(R.string.home_tab_leaders),
        stringResource(R.string.home_tab_party_department),
        stringResource(R.string.home_tab_others)
    )
    val programStatusChips: List<String> = listOf(
        stringResource(id = R.string.home_program_status_ing),
        stringResource(id = R.string.home_program_status_ends)
    )

    val selectedCategory = rememberSaveable { mutableStateOf(categoryChips[0]) }
    val selectedProgramStatus = rememberSaveable { mutableStateOf(programStatusChips[0]) }

    Scaffold(
        topBar = {
            EeosTopAppBar()
        }
    ) { innerPadding ->
        Row(
            modifier = Modifier.padding(innerPadding)
        ) {
            Spacer(
                modifier = Modifier.width(
                    width = dimensionResource(id = R.dimen.margin_common_screen)
                )
            )
            Column {
                Text(
                    text = stringResource(R.string.home_program_list),
                    style = MaterialTheme.typography.headlineSmall,
                    color = colorResource(id = R.color.paragraph)
                )
                Spacer(
                    modifier = Modifier.height(
                        height = dimensionResource(
                            id = R.dimen.margin_home_screen_category_vertical
                        )
                    )
                )
                CategoryChips(categoryChips = categoryChips, selectedCategory = selectedCategory)

                Spacer(
                    modifier = Modifier.height(
                        height = dimensionResource(
                            id = R.dimen.margin_home_screen_category_vertical
                        )
                    )
                )
                ProgramStatusChips(
                    programStatusChips = programStatusChips,
                    selectedProgramStatus = selectedProgramStatus
                )
                Spacer(
                    modifier = Modifier.height(
                        height = dimensionResource(
                            id = R.dimen.margin_home_screen_program_status_vertical
                        )
                    )
                )
                ProgramLists(programLists)
            }
            Spacer(
                modifier = Modifier.width(
                    width = dimensionResource(id = R.dimen.margin_common_screen)
                )
            )
        }
    }
}

@Preview(showSystemUi = true)
@Composable
private fun HomeScreenPreview() {
    MaterialTheme {
        HomeScreen()
    }
}
