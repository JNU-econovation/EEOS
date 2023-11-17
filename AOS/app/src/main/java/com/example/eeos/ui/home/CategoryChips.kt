package com.example.eeos.ui.home

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.size
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
fun CategoryChips(chips: List<CategoryChipData>) {
    Row {
        chips.forEach { chip ->
            CategoryChip(
                chipName = chip.categoryChipName,
                isSelected = chip.isChipSelected,
                onClick = { /*ToDo*/ }
            )
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
    chipName: String,
    isSelected: Boolean,
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
        modifier = Modifier.size(
            width = dimensionResource(id = R.dimen.width_home_screen_category_button),
            height = dimensionResource(id = R.dimen.height_home_screen_category_button)
        ),
        shape = RoundedCornerShape(dimensionResource(id = R.dimen.size_corner_11dp)),
        colors = ButtonDefaults.buttonColors(
            containerColor = containerColor,
            contentColor = contentColor
        ),
        onClick = onClick,
        border = borderStroke,
        contentPadding = PaddingValues(dimensionResource(id = R.dimen.size_all_0dp))
    ) {
        Text(
            text = chipName,
            style = MaterialTheme.typography.labelMedium,
            textAlign = TextAlign.Center
        )
    }
}

@Preview
@Composable
private fun TabPreview() {
    MaterialTheme {
        CategoryChips(
            chips = listOf(CategoryChipData("전체", false), CategoryChipData("주간 발표", true)),
        )
    }
}

@Preview
@Composable
private fun ChipPreview() {
    MaterialTheme {
        CategoryChip(
            chipName = "주간 발표",
            onClick = {},
            isSelected = true
        )
    }
}
