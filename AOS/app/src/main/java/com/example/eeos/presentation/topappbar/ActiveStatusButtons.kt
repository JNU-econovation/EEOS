package com.example.eeos.presentation.topappbar

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.dimensionResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.eeos.R
import com.example.eeos.consts.MemberStatus

@Composable
fun ActiveStatusButtons(
    memberStatus: String,
) {
    val tempActiveStatus = remember { mutableStateOf(memberStatus) }

    Column {
        Row {
            MemberStatusButton(
                buttonText = MemberStatus.AM,
                isSelected = MemberStatus.AM == tempActiveStatus.value,
                onClick = { tempActiveStatus.value = MemberStatus.AM }
            )
            Spacer(
                modifier = Modifier.width(
                    dimensionResource(
                        id = R.dimen.margin_member_status_dialog_button_horizontal_space
                    )
                )
            )
            MemberStatusButton(
                buttonText = MemberStatus.RM,
                isSelected = MemberStatus.RM == tempActiveStatus.value,
                onClick = { tempActiveStatus.value = MemberStatus.RM }
            )
        }
        Spacer(
            modifier = Modifier.height(
                dimensionResource(id = R.dimen.margin_member_status_dialog_button_vertical_space)
            )
        )
        Row {
            MemberStatusButton(
                buttonText = MemberStatus.CM,
                isSelected = MemberStatus.CM == tempActiveStatus.value,
                onClick = { tempActiveStatus.value = MemberStatus.CM }
            )
            Spacer(
                modifier = Modifier.width(
                    dimensionResource(
                        id = R.dimen.margin_member_status_dialog_button_horizontal_space
                    )
                )
            )
            MemberStatusButton(
                buttonText = MemberStatus.OB,
                isSelected = MemberStatus.OB == tempActiveStatus.value,
                onClick = { tempActiveStatus.value = MemberStatus.OB }
            )
        }
    }
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
            .size(
                width = dimensionResource(id = R.dimen.size_member_status_dialog_button_width),
                height = dimensionResource(id = R.dimen.size_member_status_dialog_button_height)
            ),
        shape = RoundedCornerShape(7.87.dp),
        colors = ButtonDefaults.buttonColors(
            containerColor = containerColor,
            contentColor = contentColor
        ),
        border = BorderStroke(
            width = dimensionResource(id = R.dimen.size_member_status_dialog_button_stroke),
            color = contentColor
        )
    ) {
        Text(
            text = buttonText,
            style = MaterialTheme.typography.titleLarge
        )
    }
}

@Preview(showBackground = true)
@Composable
private fun MemberStatusButtonsPreview() {
    MaterialTheme {
        ActiveStatusButtons(
            memberStatus = "AM",
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
