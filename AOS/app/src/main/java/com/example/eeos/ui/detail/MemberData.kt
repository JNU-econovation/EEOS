package com.example.eeos.ui.detail

data class MemberData(
    val generation: Int,
    val name: String,
    val attendStatus: AttendStatus
)

enum class AttendStatus {
    ATTEND, ABSENT, PERCEIVE, NO_RESPONSE, NON_RELATED
}
