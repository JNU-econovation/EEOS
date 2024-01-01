package com.example.eeos.presentation.detail.confirmdialog

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.dimensionResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.window.Dialog
import com.example.eeos.R

@Composable
fun ConfirmAttendStatusDialog(
    onConfirmRequest: () -> Unit,
    onDismissRequest: () -> Unit
) {
    Dialog(
        onDismissRequest = onDismissRequest
    ) {
        Card(
            modifier = Modifier
                .size(
                    width = dimensionResource(
                        id = R.dimen.width_confirm_dialog
                    ),
                    height = dimensionResource(
                        id = R.dimen.height_confirm_dialog
                    )
                ),
            shape = RoundedCornerShape(dimensionResource(id = R.dimen.size_corner_20dp)),
            colors = CardDefaults.cardColors(
                containerColor = colorResource(R.color.background),
                contentColor = colorResource(R.color.paragraph)
            )
        ) {
            Column(
                modifier = Modifier
                    .padding(dimensionResource(id = R.dimen.padding_values_15dp))
                    .fillMaxSize(),
                verticalArrangement = Arrangement.SpaceBetween
            ) {
                Text(
                    text = String.format(stringResource(R.string.confirm_dialog_container), "/* TODO */"),
                    style = MaterialTheme.typography.bodySmall
                )
                Row {
                    Spacer(modifier = Modifier.width(dimensionResource(R.dimen.margin_confirm_dialog_buttons_right)))
                    ConfirmDialogButton(
                        onClick = onDismissRequest,
                        innerText = stringResource(R.string.confirm_dialog_button_text_dismiss)
                    )
                    Spacer(modifier = Modifier.width(dimensionResource(id = R.dimen.margin_confirm_dialog_between_buttons)))
                    ConfirmDialogButton(
                        onClick = onConfirmRequest,
                        innerText = stringResource(R.string.confirm_dialog_button_text_confirm)
                    )
                }
            }
        }
    }
}

@Composable
private fun ConfirmDialogButton(onClick: () -> Unit, innerText: String) {
    val containerColor =
        if (innerText == stringResource(R.string.confirm_dialog_button_text_confirm)) {
            colorResource(id = R.color.tertiary_regular)
        } else {
            colorResource(id = R.color.tertiary)
        }
    val contentColor =
        if (innerText == stringResource(R.string.confirm_dialog_button_text_confirm)) {
            colorResource(id = R.color.background)
        } else {
            colorResource(id = R.color.tertiary_strong)
        }
    val border =
        if (innerText == stringResource(R.string.confirm_dialog_button_text_confirm)) {
            null
        } else {
            BorderStroke(
                width = dimensionResource(id = R.dimen.size_member_status_dialog_button_stroke),
                color = contentColor
            )
        }

    Button(
        onClick = onClick,
        modifier = Modifier
            .size(
                width = dimensionResource(id = R.dimen.width_confirm_dialog_button),
                height = dimensionResource(id = R.dimen.height_confirm_dialog_button)
            ),
        shape = RoundedCornerShape(dimensionResource(id = R.dimen.size_corner_7dp)),
        colors = ButtonDefaults.buttonColors(
            containerColor = containerColor,
            contentColor = contentColor
        ),
        border = border
    ) {
        Text(
            text = innerText,
            style = MaterialTheme.typography.labelMedium
        )
    }
}

@Preview(showBackground = true)
@Composable
private fun ConfirmAttendStatusDialogPreview() {
    MaterialTheme {
        ConfirmAttendStatusDialog(
            onConfirmRequest = {},
            onDismissRequest = {}
        )
    }
}