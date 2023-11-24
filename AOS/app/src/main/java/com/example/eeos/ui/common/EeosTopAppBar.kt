package com.example.eeos.ui.common

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.width
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.dimensionResource
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import com.example.eeos.R

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun EeosTopAppBar() {
    val memberStatus: List<String> = listOf(
        stringResource(R.string.home_dialog_member_status_am),
        stringResource(R.string.home_dialog_member_status_rm),
        stringResource(R.string.home_dialog_member_status_cm),
        stringResource(R.string.home_dialog_member_status_ob),
    )

    val memberStatusDialogState = remember {
        mutableStateOf(false)
    }

    if (memberStatusDialogState.value) {
        MemberStatusDialog(
            onStatusBtnClick = {},
            onDismissRequest = { memberStatusDialogState.value = false }
        )
    }

    TopAppBar(
        title = {
            Image(
                painter = painterResource(id = R.drawable.common_logo),
                contentDescription = ""
            )
        },
        actions = {
            MemberInfo(
                memberStatus = "memberStatus",
                generation = 24,
                name = "name",
                onClick = { memberStatusDialogState.value = true }
            )
            Spacer(modifier = Modifier.width(dimensionResource(id = R.dimen.margin_common_screen)))
        },
        colors = TopAppBarDefaults.topAppBarColors(
            containerColor = colorResource(id = R.color.background)
        )
    )
}

@Preview(showBackground = true)
@Composable
private fun TopAppBarPreview() {
    MaterialTheme {
        EeosTopAppBar()
    }
}
