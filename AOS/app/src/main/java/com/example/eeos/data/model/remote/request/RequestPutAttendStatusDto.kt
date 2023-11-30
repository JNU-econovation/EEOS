package com.example.eeos.data.model.remote.request

import com.example.eeos.consts.AttendStatus
import kotlinx.serialization.Contextual
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class RequestPutAttendStatusDto(
    @Contextual
    @SerialName("beforeAttendStatus")
    val beforeAttendStatus: AttendStatus,
    @Contextual
    @SerialName("afterAttendStatus")
    val afterAttendStatus: AttendStatus
)
