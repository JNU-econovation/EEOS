package com.example.eeos.ui.detail

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.eeos.R

@Composable
fun MemberList(memberList: List<MemberData>) {
    LazyVerticalGrid(
        columns = GridCells.Fixed(3),
        modifier = Modifier
            .background(
                color = colorResource(R.color.background),
                shape = RoundedCornerShape(20.dp)
            ),
        userScrollEnabled = false,
        contentPadding = PaddingValues(15.dp),
        verticalArrangement = Arrangement.spacedBy(4.dp),
        horizontalArrangement = Arrangement.spacedBy(4.dp),
        ) {
            items(memberList.size) { member ->
                Row(
                    horizontalArrangement = Arrangement.Center
                ) {
                    Text(
                        text = memberList[member].generation.toString() + "기",
                        style = MaterialTheme.typography.bodySmall,
                        color = colorResource(id = R.color.paragraph)
                    )
                    Spacer(modifier = Modifier.width(5.dp))
                    Text(
                        text = memberList[member].name,
                        style = MaterialTheme.typography.bodySmall,
                        color = colorResource(id = R.color.paragraph)
                    )
                }
            }
        }
}

@Preview(showSystemUi = true)
@Composable
private fun ProgramPreview() {
    MaterialTheme {
        MemberList(
            memberList = listOf(
                MemberData(24, "인텔리", attendStatus = AttendStatus.ATTEND),
                MemberData(22, "만두쓰", attendStatus = AttendStatus.ATTEND),
                MemberData(25, "지유쓰", attendStatus = AttendStatus.ATTEND),
                MemberData(25, "스티브", attendStatus = AttendStatus.ATTEND),
                MemberData(25, "오션쓰", attendStatus = AttendStatus.ATTEND),
            )
        )
    }
}
