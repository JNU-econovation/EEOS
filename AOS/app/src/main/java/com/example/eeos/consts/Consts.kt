package com.example.eeos.consts

val category = listOf("all", "weekly", "president", "event", " etc")
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

object ActiveStatus {
    const val am = "am"
    const val rm = "rm"
    const val cm = "cm"
    const val ob = "ob"
}

object Category {
    const val weekly = "weekly"
    const val president = "president"
    const val event = "event"
    const val etc = "etc"
}

object ProgramStatus {
    const val active = "active"
    const val end = "end"
}

object ProgramType {
    const val demand = " demand"
    const val notification = "notification"
}

object AttendStatus {
    const val attend = "attend"
    const val absent = "absent"
    const val perceive = "perceive"
    const val nonResponse = "nonResponse"
    const val nonRelated = "nonRelated"
}

val attendStatusMap = mapOf(
    "attend" to "참석",
    "absent" to "불참",
    "perceive" to "지각",
    "nonResponse" to "미정"
)

object MemberStatus {
    const val AM = "AM"
    const val RM = "RM"
    const val CM = "CM"
    const val OB = "OB"
}
