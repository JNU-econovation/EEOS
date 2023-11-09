package com.example.eeos.ui.home

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Divider
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.eeos.R

@Composable
fun ProgramList(programList: List<ProgramData>) {
    val spaceBetweenProgram = 12.dp

    Column {
        programList.forEach { program ->
            Program(program)
            Spacer(modifier = Modifier.size(spaceBetweenProgram))
        }
    }
}

@Composable
private fun Program(program: ProgramData) {
    val textColor = colorResource(R.color.paragraph)
    val containerColor = colorResource(R.color.background)
    val spaceBetweenText = 5.dp

    Card(
        modifier = Modifier.width(width = 318.dp),
        colors = CardDefaults.cardColors(
            containerColor = containerColor,
            contentColor = textColor
        )
    ) {
        Column {
            Divider(
                thickness = 1.5.dp,
                color = colorResource(id = R.color.tertiary)
            )
            Column(
                modifier = Modifier
                    .padding(
                        start = 15.dp,
                        top = 10.dp,
                        bottom = 10.dp
                    )
            ) {
                Text(
                    text = program.date,
                    style = MaterialTheme.typography.bodyMedium,
                    color = textColor
                )
                Spacer(modifier = Modifier.size(spaceBetweenText))
                Text(
                    text = program.title,
                    style = MaterialTheme.typography.titleSmall,
                    color = textColor
                )
            }
            Divider(
                thickness = 1.5.dp,
                color = colorResource(id = R.color.tertiary)
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
