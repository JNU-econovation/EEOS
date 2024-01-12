package com.example.eeos.presentation.home

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyListState
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.material3.Divider
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.snapshotFlow
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.dimensionResource
import androidx.compose.ui.tooling.preview.Preview
import com.example.eeos.R
import com.example.eeos.domain.model.Program
import com.example.eeos.presentation.util.getDateTime

@Composable
fun ProgramLists(
    loading: Boolean,
    empty: Boolean,
    programLists: List<Program>?,
    onProgramClick: (Int) -> Unit,
    loadMorePrograms: () -> Unit
) {
    val programListState = rememberLazyListState()

    if (programLists != null) {
        LazyColumn(state = programListState) {
            items(programLists) { program ->
                Program(program, onProgramClick)
            }
        }
    }

    programListState.OnBottomReached(
        loadMorePrograms = loadMorePrograms
    )
}

@Composable
private fun Program(program: Program, onProgramClick: (Int) -> Unit) {
    Column {
        Divider(
            thickness = dimensionResource(id = R.dimen.width_stroke_0_7dp),
            color = colorResource(id = R.color.stroke_400)
        )
        Column(
            modifier = Modifier
                .padding(
                    horizontal = dimensionResource(
                        id = R.dimen.padding_home_screen_program_horizontal
                    )
                )
                .size(
                    width = dimensionResource(id = R.dimen.width_home_screen_program),
                    height = dimensionResource(id = R.dimen.height_home_screen_program)
                )
                .clickable { onProgramClick(program.programId) },
            verticalArrangement = Arrangement.Center
        ) {
            Text(
                text = getDateTime(program.deadLine),
                style = MaterialTheme.typography.bodyMedium,
                color = colorResource(R.color.paragraph)
            )
            Spacer(
                modifier = Modifier.size(
                    dimensionResource(id = R.dimen.margin_home_screen_space_between_program_texts)
                )
            )
            Text(
                text = program.title,
                style = MaterialTheme.typography.titleSmall,
                color = colorResource(R.color.paragraph)
            )
        }
    }
}

@Composable
private fun LazyListState.OnBottomReached(
    loadMorePrograms: () -> Unit
) {
    val shouldLoadMore = remember {
        derivedStateOf {
            val lastVisibleItem = layoutInfo.visibleItemsInfo.lastOrNull() ?: return@derivedStateOf true

            lastVisibleItem.index == layoutInfo.totalItemsCount - 1
        }
    }

    LaunchedEffect(shouldLoadMore) {
        snapshotFlow { shouldLoadMore.value }
            .collect {
                if (it) loadMorePrograms()
            }
    }
}

@Preview(showBackground = true)
@Composable
private fun ProgramPreview() {
    MaterialTheme {
        ProgramLists(
            loading = false,
            empty = false,
            programLists = listOf(),
            onProgramClick = {},
            loadMorePrograms = {}
        )
    }
}
