package com.example.eeos.ui.common

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.width
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.eeos.R

@Composable
fun MemberInfo(memberStatus: String, generation: Int, name: String) {
    Row(
        verticalAlignment = Alignment.CenterVertically
    ) {
        Image(
            painter = painterResource(id = R.drawable.common_mypage_button),
            contentDescription = "내 정보"
        )
        Spacer(modifier = Modifier.width(13.dp))


        Column(
            horizontalAlignment = Alignment.End
        ) {
            Text(
                text = memberStatus,
                style = MaterialTheme.typography.labelSmall,
                color = colorResource(id = R.color.paragraph)
            )


            Row {
                Text(
                    text = generation.toString() + "기",
                    style = MaterialTheme.typography.labelSmall,
                    color = colorResource(id = R.color.paragraph)
                )
                Spacer(modifier = Modifier.width(3.dp))
                Text(
                    text = name,
                    style = MaterialTheme.typography.labelSmall,
                    color = colorResource(id = R.color.paragraph)
                )
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
private fun MemberInfoPreview() {
    MaterialTheme {
        MemberInfo(
            memberStatus = "AM",
            generation = 24,
            name = "인텔리"
        )
    }
}