package com.example.eeos.presentation.home

import android.annotation.SuppressLint
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.SnackbarHost
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.State
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.dimensionResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.hilt.navigation.compose.hiltViewModel
import com.example.eeos.R
import com.example.eeos.consts.programCategory
import com.example.eeos.consts.categoryChips
import com.example.eeos.consts.programStatus
import com.example.eeos.consts.programStatusChips
import com.example.eeos.presentation.topappbar.EeosTopAppBar
import com.example.eeos.presentation.topappbar.TopAppBarUiState
import com.example.eeos.presentation.topappbar.TopAppBarViewModel

@SuppressLint("StateFlowValueCalledInComposition")
@Composable
fun HomeScreen(
    homeUiState: State<HomeUiState>,
    topAppBarUiState: State<TopAppBarUiState>,
    loadProgramList: (String, String, Int) -> Unit,
    onProgramClick: (Int) -> Unit,
    refreshProgramList: () -> Unit,
    putActiveStatus: (String) -> Unit,
    onLogoClick: () -> Unit,
    onLogout: () -> Unit
) {
    val selectedCategory = rememberSaveable { mutableStateOf(categoryChips[0]) }
    val selectedProgramStatus = rememberSaveable { mutableStateOf(programStatusChips[0]) }
    val page = rememberSaveable { mutableStateOf(0) }

    Scaffold(
        topBar = {
            EeosTopAppBar(
                topAppBarUiState = topAppBarUiState,
                putActiveStatus = putActiveStatus,
                onLogoClick = onLogoClick,
                onLogout = onLogout
            )
        },
        snackbarHost = { SnackbarHost(hostState = topAppBarUiState.value.snackbarHostState) },
        containerColor = colorResource(id = R.color.background)
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
                CategoryChips(
                    categoryChips = categoryChips,
                    selectedCategory = selectedCategory,
                    onCategoryChipClick = {
                        refreshProgramList()
                        page.value = 0
                        loadProgramList(
                            programCategory[categoryChips.indexOf(selectedCategory.value)],
                            programStatus[programStatusChips.indexOf(selectedProgramStatus.value)],
                            page.value,
                        )
                    }
                )

                Spacer(
                    modifier = Modifier.height(
                        height = dimensionResource(
                            id = R.dimen.margin_home_screen_category_vertical
                        )
                    )
                )
                ProgramStatusChips(
                    programStatusChips = programStatusChips,
                    selectedProgramStatus = selectedProgramStatus,
                    onProgramStatusClick = {
                        refreshProgramList()
                        page.value = 0
                        loadProgramList(
                            programCategory[categoryChips.indexOf(selectedCategory.value)],
                            programStatus[programStatusChips.indexOf(selectedProgramStatus.value)],
                            page.value,
                        )
                    }
                )
                Spacer(
                    modifier = Modifier.height(
                        height = dimensionResource(
                            id = R.dimen.margin_home_screen_program_status_vertical
                        )
                    )
                )
                ProgramLists(
                    loading = homeUiState.value.isLoading,
                    empty = homeUiState.value.isEmpty,
                    programLists = homeUiState.value.programList,
                    onProgramClick = onProgramClick,
                    loadMorePrograms = {
                        loadProgramList(
                            programCategory[categoryChips.indexOf(selectedCategory.value)],
                            programStatus[programStatusChips.indexOf(selectedProgramStatus.value)],
                            ++page.value
                        )
                    }
                )
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
        HomeScreen(
            homeUiState = hiltViewModel<HomeViewModel>().homeUiState.collectAsState(),
            topAppBarUiState = hiltViewModel<TopAppBarViewModel>().topAppBarUiState.collectAsState(),
            loadProgramList = { p1, p2, p3 -> },
            onProgramClick = { p1 -> },
            refreshProgramList = {},
            putActiveStatus = { p -> },
            onLogoClick = {},
            onLogout = {}
        )
    }
}
