package com.example.eeos.data.model.remote.response

import com.example.eeos.consts.ActiveStatus
import kotlinx.serialization.Contextual
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class ResponsePutActiveStatusDto(
    @SerialName("name")
    val name: String,
    @Contextual
    @SerialName("activeStatus")
    val activeStatus: ActiveStatus
)
