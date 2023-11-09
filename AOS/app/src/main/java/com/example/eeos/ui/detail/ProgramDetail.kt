package com.example.eeos.ui.detail

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.material3.Divider
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.eeos.R

@Composable
fun ProgramDetail(title: String, date: String, content: String) {
    Column(
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Divider(
            thickness = 1.5.dp,
            color = colorResource(id = R.color.tertiary)
        )
        Spacer(modifier = Modifier.height(10.dp))
        Text(
            text = title,
            style = MaterialTheme.typography.headlineMedium
        )
        Text(
            text = date,
            style = MaterialTheme.typography.bodyLarge
        )
        Spacer(modifier = Modifier.height(10.dp))
        Divider(
            thickness = 1.5.dp,
            color = colorResource(id = R.color.tertiary)
        )

        Spacer(modifier = Modifier.height(10.dp))
        Text(
            text = content,
            style = MaterialTheme.typography.bodySmall
        )
        Spacer(modifier = Modifier.height(10.dp))
        Divider(
            thickness = 1.5.dp,
            color = colorResource(id = R.color.tertiary)
        )
    }
}

@Preview(showBackground = true)
@Composable
private fun ProgramDetailPreview() {
    MaterialTheme {
        ProgramDetail(
            title = "10월 2주차 주간 발표",
            date = "2023년 10월 6일 (일)",
            content = "ss"
        )
    }
}
