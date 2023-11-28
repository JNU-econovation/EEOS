package com.example.eeos.ui.home

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.width
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.dimensionResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import com.example.eeos.R

@Composable
fun ProgramStatusChips(
    programStatusChips: List<String>,
    selectedProgramStatus: MutableState<String>
) {
    Row {
        programStatusChips.forEach { chip ->
            ProgramStatusChip(
                chipName = chip,
                isSelected = chip == selectedProgramStatus.value,
                onClick = { selectedProgramStatus.value = chip }
            )
            Spacer(
                modifier = Modifier.width(
                    dimensionResource(id = R.dimen.margin_home_screen_space_between_program_status)
                )
            )
        }
    }
}

@Composable
private fun ProgramStatusChip(
    chipName: String,
    isSelected: Boolean,
    onClick: () -> Unit,
) {
    /*val interactionSource = remember { MutableInteractionSource() }
    val isFocused by interactionSource.collectIsFocusedAsState()*/

    val textColor = if (isSelected) {
        colorResource(R.color.paragraph)
    } else {
        colorResource(R.color.gray_500)
    }

    Text(
        text = chipName,
        color = textColor,
        style = MaterialTheme.typography.titleSmall,
        modifier = Modifier.clickable {
            onClick()
        }
    )
}

@Preview
@Composable
private fun ProgramStatusChipsPreview() {
    MaterialTheme {
        ProgramStatusChips(
            programStatusChips = listOf(
                stringResource(id = R.string.home_program_status_ing),
                stringResource(id = R.string.home_program_status_ends)
            ),
            selectedProgramStatus = rememberSaveable { mutableStateOf("진행 중") }
        )
    }
}

@Preview
@Composable
private fun ProgramStatusChipPreview() {
    MaterialTheme {
        ProgramStatusChip(
            chipName = "주간 발표",
            onClick = {},
            isSelected = true
        )
    }
}
