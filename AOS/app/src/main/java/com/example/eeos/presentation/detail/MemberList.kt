package com.example.eeos.presentation.detail

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.material3.Divider
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.dimensionResource
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview
import com.example.eeos.R
import com.example.eeos.presentation.util.NonLazyGrid

data class Attendance(
    val attendance: String,
    val painter: Painter,
    val memberList: List<MemberData>
)

val sampleMemberList: List<MemberData> = listOf(
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

@Composable
fun MemberLists() {
    val attendStatusList: List<Attendance> = listOf(
        Attendance(
            attendance = "참석",
            painter = painterResource(id = R.drawable.detail_ic_attend_20dp),
            memberList = sampleMemberList
        ),
        Attendance(
            attendance = "불참",
            painter = painterResource(id = R.drawable.detail_ic_absent_20dp),
            memberList = sampleMemberList
        ),
        Attendance(
            attendance = "지각",
            painter = painterResource(id = R.drawable.detail_ic_latecomers_20dp),
            memberList = sampleMemberList
        ),
        Attendance(
            attendance = "미정",
            painter = painterResource(id = R.drawable.detail_ic_undefined_20dp),
            memberList = sampleMemberList
        ),
    )

    Column {
        attendStatusList.forEach { attendStatus ->
            MemberList(
                title = attendStatus.attendance,
                painter = attendStatus.painter,
                memberList = attendStatus.memberList /* ToDo */
            )
            Spacer(
                modifier = Modifier.height(
                    height = dimensionResource(
                        id = R.dimen.margin_detail_screen_space_between_attendance
                    )
                )
            )
        }
    }
}

@Composable
private fun MemberList(
    title: String,
    painter: Painter,
    memberList: List<MemberData>
) {
    Column {
        Row(
            modifier = Modifier.width(dimensionResource(id = R.dimen.width_detail_screen_divider)),
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            Row(
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = title,
                    style = MaterialTheme.typography.titleSmall,
                    color = colorResource(R.color.paragraph)
                )
                Spacer(
                    modifier = Modifier.size(
                        dimensionResource(
                            id = R.dimen.margin_detail_screen_space_between_title_and_icon
                        )
                    )
                )
                Image(
                    painter = painter,
                    contentDescription = "",
                )
            }
            Text(
                text = "20명",
                style = MaterialTheme.typography.bodySmall,
                color = colorResource(R.color.gray_500)
            )
        }
        Spacer(
            modifier = Modifier.height(
                dimensionResource(id = R.dimen.margin_detail_screen_divider_top)
            )
        )
        Divider(
            modifier = Modifier.width(dimensionResource(id = R.dimen.width_detail_screen_divider)),
            thickness = dimensionResource(id = R.dimen.width_stroke_0_7dp),
            color = colorResource(id = R.color.stroke_400)
        )
        Spacer(
            modifier = Modifier.height(
                dimensionResource(id = R.dimen.margin_detail_screen_divider_bottom)
            )
        )

        NonLazyGrid(
            columns = 3,
            itemCount = memberList.size,
            modifier = Modifier.width(dimensionResource(id = R.dimen.width_detail_screen_divider)),
        ) {
            Member(memberList[it])
        }
    }
}

@Composable
private fun Member(member: MemberData) {
    Row(
        horizontalArrangement = Arrangement.Center
    ) {
        Text(
            text = member.generation.toString() + "기",
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
            text = member.name,
            style = MaterialTheme.typography.bodySmall,
            color = colorResource(id = R.color.paragraph)
        )
    }
}

@Preview(showSystemUi = true)
@Composable
private fun ProgramPreview() {
    MaterialTheme {
        MemberLists()
    }
}
