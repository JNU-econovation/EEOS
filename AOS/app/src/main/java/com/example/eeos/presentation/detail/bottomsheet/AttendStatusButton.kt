package com.example.eeos.presentation.detail.bottomsheet

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.layout.PaddingValues
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
import com.example.eeos.R

@Composable
fun AttendStatusButton(
    buttonText: String,
    contentColor: Color,
    containerColor: Color,
    backgroundColor: Color,
    selectedAttendStatus: String?,
    onClick: () -> Unit,
) {
    val contentColor = if (selectedAttendStatus == buttonText) {
        contentColor
    } else {
        colorResource(R.color.gray_500)
    }
    val containerColor = if (selectedAttendStatus == buttonText) {
        containerColor
    } else {
        backgroundColor
    }
    val strokeColor = if (selectedAttendStatus == buttonText) {
        contentColor
    } else {
        colorResource(R.color.transparent)
    }

    Button(
        modifier = Modifier
            .clip(RoundedCornerShape(dimensionResource(id = R.dimen.size_corner_20dp))),
        onClick = onClick,
        colors = ButtonDefaults.buttonColors(
            containerColor = containerColor,
            contentColor = contentColor,
            disabledContainerColor = containerColor,
            disabledContentColor = contentColor
        ),
        border = BorderStroke(
            width = dimensionResource(id = R.dimen.width_stroke_1_2dp),
            color = strokeColor
        ),
        contentPadding = PaddingValues(
            horizontal = dimensionResource(id = R.dimen.padding_values_35dp),
            vertical = dimensionResource(id = R.dimen.padding_values_15dp)
        ),
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
private fun AttendStatusButtonPreview() {
    MaterialTheme {
        AttendStatusButton(
            buttonText = "수요조사에 참여해주세요.",
            contentColor = colorResource(R.color.success_strong),
            containerColor = colorResource(R.color.success_light),
            backgroundColor = colorResource(R.color.gray_100),
            selectedAttendStatus = /*rememberSaveable { mutableStateOf("참석") }*/"참석",
            onClick = {},
        )
    }
}
