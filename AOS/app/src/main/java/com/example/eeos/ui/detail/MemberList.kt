package com.example.eeos.ui.detail

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Divider
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.dimensionResource
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview
import com.example.eeos.R

@Composable
fun MemberList(
    title: String,
    painter: Painter,
    memberList: List<MemberData>
) {
    Column {
        Row {
            Text(
                text = title,
                style = MaterialTheme.typography.titleSmall,
                color = colorResource(R.color.paragraph)
            )
            Spacer(modifier = Modifier.size(dimensionResource(id = R.dimen.margin_detail_screen_space_between_title_and_icon)))
            Image(
                painter = painter,
                contentDescription = "",
            )
        }
        Spacer(modifier = Modifier.height(dimensionResource(id = R.dimen.margin_detail_screen_divider_vertical)))
        Divider()
        LazyVerticalGrid(
            columns = GridCells.Fixed(3),
            modifier = Modifier
                .background(
                    color = colorResource(R.color.background),
                    shape = RoundedCornerShape(dimensionResource(id = R.dimen.size_corner_20dp))
                ),
            userScrollEnabled = false,
            contentPadding = PaddingValues(dimensionResource(id = R.dimen.padding_values_15dp)),
            verticalArrangement = Arrangement.spacedBy(
                dimensionResource(
                    id = R.dimen.margin_detail_screen_space_between_member_list_content
                )
            ),
            horizontalArrangement = Arrangement.spacedBy(
                dimensionResource(
                    id = R.dimen.margin_detail_screen_space_between_member_list_content
                )
            ),
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
                    Spacer(
                        modifier = Modifier.width(
                            dimensionResource(
                                id = R.dimen.margin_detail_screen_space_between_member_list_generation_and_name
                            )
                        )
                    )
                    Text(
                        text = memberList[member].name,
                        style = MaterialTheme.typography.bodySmall,
                        color = colorResource(id = R.color.paragraph)
                    )
                }
            }
        }
    }
}

@Preview(showSystemUi = true)
@Composable
private fun ProgramPreview() {
    MaterialTheme {
        MemberList(
            title = "참석",
            painter = painterResource(id = R.drawable.detail_ic_attend_20dp),
            memberList = listOf(
                MemberData(24, "인텔리", attendStatus = AttendStatus.ATTEND),
                MemberData(22, "만두쓰", attendStatus = AttendStatus.ATTEND),
                MemberData(25, "지유쓰", attendStatus = AttendStatus.ATTEND),
                MemberData(25, "스티브", attendStatus = AttendStatus.ATTEND),
                MemberData(25, "오션쓰", attendStatus = AttendStatus.ATTEND),
                MemberData(24, "인텔리", attendStatus = AttendStatus.ATTEND),
                MemberData(22, "만두쓰", attendStatus = AttendStatus.ATTEND),
                MemberData(25, "지유쓰", attendStatus = AttendStatus.ATTEND),
                MemberData(25, "스티브", attendStatus = AttendStatus.ATTEND),
                MemberData(25, "오션쓰", attendStatus = AttendStatus.ATTEND),
            )
        )
    }
}
