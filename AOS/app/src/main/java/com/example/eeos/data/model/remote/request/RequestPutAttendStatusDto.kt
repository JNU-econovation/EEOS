package com.example.eeos.data.model.remote.request

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class RequestPutAttendStatusDto(
    @SerialName("beforeAttendStatus")
    val beforeAttendStatus: String,
    @SerialName("afterAttendStatus")
    val afterAttendStatus: String
)
