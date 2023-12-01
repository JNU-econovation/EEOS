package com.example.eeos.domain.model

import com.example.eeos.consts.AttendStatus

data class AttendStatus(
    val name: String,
    val activeStatus: AttendStatus
)
