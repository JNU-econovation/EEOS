package com.example.eeos.domain.model

import com.example.eeos.consts.ActiveStatus

data class ActiveStatus(
    val name: String,
    val activeStatus: ActiveStatus
)
