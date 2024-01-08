package com.example.eeos.data.model.remote.response

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class ResponsePutAttendStatusDto(
    @SerialName("name")
    val name: String,
    @SerialName("activeStatus")
    val attendStatus: String
)
