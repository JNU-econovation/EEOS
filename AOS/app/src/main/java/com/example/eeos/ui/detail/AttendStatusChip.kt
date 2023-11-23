package com.example.eeos.ui.detail

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.dimensionResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.DpSize
import com.example.eeos.R

@Composable
fun AttendStatusChip(
    buttonText: String,
    contentColor: Color,
    containerColor: Color,
    isContentLong: Boolean
) {
    val dpSize = if (isContentLong) {
        DpSize(
            width = dimensionResource(id = R.dimen.width_detail_bottom_sheet_long_button),
            height = dimensionResource(id = R.dimen.height_detail_bottom_sheet_long_button)
        )
    } else {
        DpSize(
            width = dimensionResource(id = R.dimen.width_detail_bottom_sheet_short_button),
            height = dimensionResource(id = R.dimen.height_detail_bottom_sheet_short_button)
        )
    }

    Button(
        modifier = Modifier
            .size(dpSize)
            .clip(RoundedCornerShape(dimensionResource(id = R.dimen.size_corner_20dp))),
        colors = ButtonDefaults.buttonColors(
            containerColor = containerColor,
            contentColor = contentColor,
            disabledContainerColor = containerColor,
            disabledContentColor = contentColor
        ),
        border = BorderStroke(
            width = dimensionResource(id = R.dimen.width_stroke_1_2dp),
            color = contentColor
        ),
        enabled = false,
        onClick = {}
    ) {
        Text(
            text = buttonText,
            style = MaterialTheme.typography.bodyLarge,
            color = contentColor
        )
    }
}


@Preview(showBackground = true)
@Composable
private fun AttendStatusChipPreview() {
    MaterialTheme {
        AttendStatusChip(
            buttonText = "수요조사 해주세요!",
            contentColor = colorResource(R.color.success_strong),
            containerColor = colorResource(R.color.success_light),
            isContentLong = true
        )
    }
}