package com.example.eeos.data.model.remote.response

import kotlinx.serialization.Contextual
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class ResponseGetAttendStatusDto(
    @SerialName("name")
    val name: String,
    @Contextual
    @SerialName("activeStatus")
    val attendStatus: String
) {
    fun toAttendStatus(): com.example.eeos.domain.model.AttendStatus =
        com.example.eeos.domain.model.AttendStatus(
            name = name,
            attendStatus = attendStatus
        )
}
