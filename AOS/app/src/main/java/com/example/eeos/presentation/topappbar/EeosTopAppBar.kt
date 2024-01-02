package com.example.eeos.presentation.topappbar

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.width
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.State
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.dimensionResource
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.hilt.navigation.compose.hiltViewModel
import com.example.eeos.R

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun EeosTopAppBar(
    topAppBarUiState: State<TopAppBarUiState>,
    putActiveStatus: (String) -> Unit
) {
    val memberStatusDialogState = remember {
        mutableStateOf(false)
    }

    if (memberStatusDialogState.value) {
        ActiveStatusDialog(
            name = topAppBarUiState.value.name,
            activeStatus = topAppBarUiState.value.activeStatus,
            onSaveStatusBtnClick = { putActiveStatus(topAppBarUiState.value.activeStatus) },
            onDismissRequest = { memberStatusDialogState.value = false }
        )
    }

    TopAppBar(
        title = {
            Image(
                painter = painterResource(id = R.drawable.eeos_logo_monogram),
                contentDescription = ""
            )
        },
        actions = {
            MemberInfo(
                topAppBarUiState = topAppBarUiState,
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
        EeosTopAppBar(
            topAppBarUiState = hiltViewModel<TopAppBarViewModel>().topAppBarUiState.collectAsState(),
            putActiveStatus = { p -> }
        )
    }
}
