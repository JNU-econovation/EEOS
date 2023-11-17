package com.example.eeos.ui.home

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.dimensionResource
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import com.example.eeos.R

@Composable
fun Category(chips: List<String>) {
    Row {
        chips.forEach { tag ->
            CategoryChip(tagName = tag, onClick = { /*ToDo*/ })
            Spacer(
                modifier = Modifier.width(
                    dimensionResource(id = R.dimen.margin_home_screen_space_between_categories)
                )
            )
        }
    }
}

@Composable
private fun CategoryChip(
    tagName: String,
    isSelected: Boolean = false,
    onClick: () -> Unit,
) {
    /*val interactionSource = remember { MutableInteractionSource() }
    val isFocused by interactionSource.collectIsFocusedAsState()*/

    val containerColor = if (isSelected) {
        colorResource(R.color.paragraph)
    } else {
        colorResource(R.color.background)
    }
    val contentColor = if (isSelected) {
        colorResource(R.color.background)
    } else {
        colorResource(R.color.gray_500)
    }
    val borderStroke = if (isSelected) {
        BorderStroke(
            width = dimensionResource(id = R.dimen.size_all_0dp),
            color = colorResource(id = R.color.transparent)
        )
    } else {
        BorderStroke(
            width = dimensionResource(id = R.dimen.width_stroke_0_3dp),
            color = colorResource(id = R.color.stroke_400)
        )
    }

    Button(
        shape = RoundedCornerShape(dimensionResource(id = R.dimen.size_corner_11dp)),
        colors = ButtonDefaults.buttonColors(
            containerColor = containerColor,
            contentColor = contentColor
        ),
        onClick = onClick,
        border = borderStroke
    ) {
        Text(
            text = tagName,
            style = MaterialTheme.typography.labelLarge,
            textAlign = TextAlign.Center
        )
    }
}

@Preview
@Composable
private fun TabPreview() {
    MaterialTheme {
        Category(
            chips = listOf("주간 발표", "행사부"),
        )
    }
}

@Preview
@Composable
private fun ChipPreview() {
    MaterialTheme {
        CategoryChip(
            tagName = "주간 발표",
            onClick = {},
            isSelected = true
        )
    }
}
