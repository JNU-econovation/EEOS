package com.example.eeos.data.model.remote.response

import com.example.eeos.consts.AttendStatus
import kotlinx.serialization.Contextual
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class ResponsePutAttendStatusDto(
    @SerialName("name")
    val name: String,
    @Contextual
    @SerialName("activeStatus")
    val attendStatus: AttendStatus
)
