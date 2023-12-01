package com.example.eeos.domain.model

import com.example.eeos.consts.AttendStatus

data class Member(
    val name: String,
    val attendStatus: AttendStatus
)
