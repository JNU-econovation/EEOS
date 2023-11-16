package com.example.eeos.ui.common

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.dimensionResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.eeos.R


private val memberStatusList = listOf("AM", "RM", "CM", "OB")

@Composable
fun MemberStatusButtons(
    memberStatus: String
) {
    LazyVerticalGrid(
        columns = GridCells.Fixed(2),
        userScrollEnabled = false,
        verticalArrangement = Arrangement.spacedBy(dimensionResource(id = R.dimen.margin_member_status_dialog_vertical_space)),
        horizontalArrangement = Arrangement.spacedBy(dimensionResource(id = R.dimen.margin_member_status_dialog_horizontal_space)),
        content = {
            items(4) { index ->
                MemberStatusButton(
                    buttonText = memberStatusList[index],
                    isSelected = memberStatusList[index] == memberStatus,
                    onClick = {

                    }
                )
            }
        }
    )
}

@Composable
private fun MemberStatusButton(
    buttonText: String,
    isSelected: Boolean,
    onClick: () -> Unit
) {
    val containerColor = if (isSelected) {
        colorResource(R.color.secondary)
    } else {
        colorResource(R.color.gray_100)
    }
    val contentColor = if (isSelected) {
        colorResource(R.color.tertiary_strong)
    } else {
        colorResource(R.color.gray_500)
    }

    Button(
        onClick = onClick,
        modifier = Modifier
            .size(width = 127.dp, height = 60.dp),
        shape = RoundedCornerShape(7.87.dp),
        colors = ButtonDefaults.buttonColors(
            containerColor = containerColor,
            contentColor = contentColor
        ),
        border = BorderStroke(
            width = 1.dp,
            color = contentColor
        )
    ) {
        Text(
            text = buttonText,
            style = MaterialTheme.typography.titleLarge
        )
    }
}

@Preview(showSystemUi = true)
@Composable
private fun MemberStatusButtonsPreview() {
    MaterialTheme {
        MemberStatusButtons(
            memberStatus = "AM"
        )
    }
}


@Preview(showBackground = true)
@Composable
private fun MemberStatusButtonPreview() {
    MaterialTheme {
        MemberStatusButton(
            buttonText = "AM",
            isSelected = false,
            onClick = {}
        )
    }
}