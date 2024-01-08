package com.example.eeos.consts

val category = listOf("all", "weekly", "presidentTeam", "eventTeam", " etc")
val programStatus = listOf("active", "end")

val categoryChips: List<String> = listOf(
    "전체",
    "주간 발표",
    "회장단",
    "행사부",
    "기타 행사"
)
val programStatusChips: List<String> = listOf(
    "진행 중",
    "완료"
)

object ProgramType {
    const val demand = " demand"
    const val notification = "notification"
}

object AttendStatus {
    const val attend = "attend"
    const val absent = "absent"
    const val late = "late"
    const val nonResponse = "nonResponse"
    const val nonRelated = "nonRelated"
}

val attendStatusMap = mapOf(
    "attend" to "참석",
    "absent" to "불참",
    "late" to "지각",
    "nonResponse" to "미정"
)

object MemberStatus {
    const val AM = "AM"
    const val RM = "RM"
    const val CM = "CM"
    const val OB = "OB"
}

val memberStatusMap = mapOf(
    "AM" to "am",
    "RM" to "rm",
    "CM" to "cm",
    "OB" to "ob"
)

object SnackBarMessage {
    const val onActiveStatusChanged = "회원 상태가 변경 되었습니다."
    const val onAttendStatusChanged = "참석 상태가 변경 되었습니다."
}
