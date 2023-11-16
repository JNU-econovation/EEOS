package com.example.eeos.ui.home

import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.collectIsFocusedAsState
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.eeos.R

@Composable
fun TagList(tagList: List<String>) {
    Row {
        tagList.forEach { tag ->
            TagChip(tag)
            Spacer(modifier = Modifier.width(10.dp))
        }
    }
}

@Composable
private fun TagChip(
    tagName: String
) {
    val interactionSource = remember { MutableInteractionSource() }
    val isFocused by interactionSource.collectIsFocusedAsState()

    val containerColor = if (isFocused) {
        colorResource(R.color.background)
    } else {
        colorResource(R.color.paragraph)
    }
    val contentColor = if (isFocused) {
        colorResource(R.color.background)
    } else {
        colorResource(R.color.gray_500)
    }

    Button(
        shape = RoundedCornerShape(20.dp),
        colors = ButtonDefaults.buttonColors(
            containerColor = containerColor,
            contentColor = contentColor
        ),
        onClick = {
        }
    ) {
        Text(
            text = tagName,
            style = MaterialTheme.typography.labelLarge,
        )
    }
}

@Preview
@Composable
private fun TabPreview() {
    MaterialTheme {
        TagList(
            tagList = listOf("주간 발표", "행사부")
        )
    }
}

@Preview
@Composable
private fun ChipPreview() {
    MaterialTheme {
        TagChip(
            "주간 발표"
        )
    }
}
