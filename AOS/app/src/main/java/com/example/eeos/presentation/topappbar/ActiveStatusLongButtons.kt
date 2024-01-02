package com.example.eeos.presentation.topappbar

import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.dimensionResource
import androidx.compose.ui.res.stringResource
import com.example.eeos.R

@Composable
fun SaveActiveStatusButton(onClick: () -> Unit) {
    Button(
        onClick = onClick,
        modifier = Modifier
            .size(
                width = dimensionResource(id = R.dimen.width_active_status_dialog_long_button),
                height = dimensionResource(id = R.dimen.height_active_status_dialog_long_button)
            ),
        shape = RoundedCornerShape(dimensionResource(id = R.dimen.size_corner_20dp)),
        colors = ButtonDefaults.buttonColors(
            containerColor = colorResource(id = R.color.tertiary_regular),
            contentColor = colorResource(id = R.color.background)
        )
    ) {
        Text(
            text = stringResource(id = R.string.active_status_dialog_save_active_status),
            style = MaterialTheme.typography.labelMedium
        )
    }
}

@Composable
fun LogoutButton(onClick: () -> Unit) {
    Button(
        onClick = onClick,
        modifier = Modifier
            .size(
                width = dimensionResource(id = R.dimen.width_active_status_dialog_long_button),
                height = dimensionResource(id = R.dimen.height_active_status_dialog_long_button)
            ),
        shape = RoundedCornerShape(dimensionResource(id = R.dimen.size_corner_20dp)),
        colors = ButtonDefaults.buttonColors(
            containerColor = colorResource(id = R.color.paragraph),
            contentColor = colorResource(id = R.color.background)
        )
    ) {
        Text(
            text = stringResource(id = R.string.active_status_dialog_logout),
            style = MaterialTheme.typography.labelMedium
        )
    }
}
