package com.example.eeos.ui.home

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material3.Divider
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.dimensionResource
import androidx.compose.ui.tooling.preview.Preview
import com.example.eeos.R

@Composable
fun ProgramList(programList: List<ProgramData>) {
    Column {
        programList.forEach { program ->
            Program(program)
        }
    }
}

@Composable
private fun Program(program: ProgramData) {
    val textColor = colorResource(R.color.paragraph)

    Column {
        Divider(
            thickness = dimensionResource(id = R.dimen.width_stroke_0_7dp),
            color = colorResource(id = R.color.stroke_400)
        )
        Column(
            modifier = Modifier
                .padding(
                    horizontal = dimensionResource(id = R.dimen.padding_home_screen_program_horizontal)
                )
                .size(
                    width = dimensionResource(id = R.dimen.width_home_screen_program),
                    height = dimensionResource(id = R.dimen.height_home_screen_program)
                ),
            verticalArrangement = Arrangement.Center
        ) {
            Text(
                text = program.date,
                style = MaterialTheme.typography.bodyMedium,
                color = textColor
            )
            Spacer(
                modifier = Modifier.size(
                    dimensionResource(id = R.dimen.margin_home_screen_space_between_program_texts)
                )
            )
            Text(
                text = program.title,
                style = MaterialTheme.typography.titleSmall,
                color = textColor
            )
        }
    }
}

@Preview(showBackground = true)
@Composable
private fun ProgramPreview() {
    MaterialTheme {
        ProgramList(
            listOf(
                ProgramData(date = "2023년 11월 06일 (월)", title = "오늘의 행사 두구두구"),
                ProgramData(date = "2023년 11월 06일 (월)", title = "오늘의 행사 두구두구")
            )
        )
    }
}
