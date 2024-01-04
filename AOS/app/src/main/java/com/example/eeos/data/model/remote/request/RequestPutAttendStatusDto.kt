package com.example.eeos.data.model.remote.request

import kotlinx.serialization.Contextual
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class RequestPutAttendStatusDto(
    @Contextual
    @SerialName("beforeAttendStatus")
    val beforeAttendStatus: String,
    @Contextual
    @SerialName("afterAttendStatus")
    val afterAttendStatus: String
)
