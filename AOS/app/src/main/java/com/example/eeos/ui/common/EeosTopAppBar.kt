package com.example.eeos.ui.common

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.width
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.dimensionResource
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview
import com.example.eeos.R

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun EeosTopAppBar(
    memberStatus: String,
    generation: Int,
    name: String,
) {
    TopAppBar(
        title = {
                Image(
                    painter = painterResource(id = R.drawable.common_logo),
                    contentDescription = ""
                )
        },
        actions = {
            MemberInfo(
                memberStatus = memberStatus,
                generation = generation,
                name = name
            )
            Spacer(modifier = Modifier.width(dimensionResource(id = R.dimen.margin_common_screen)))
        }
    )
}

@Preview(showBackground = true)
@Composable
private fun TopAppBarPreview() {
    MaterialTheme {
        EeosTopAppBar(
            memberStatus = "AM",
            generation = 24,
            name = "인텔리"
        )
    }
}
