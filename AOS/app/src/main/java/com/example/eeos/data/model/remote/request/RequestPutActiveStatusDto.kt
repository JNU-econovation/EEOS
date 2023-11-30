package com.example.eeos.data.model.remote.request

import com.example.eeos.consts.ActiveStatus
import kotlinx.serialization.Contextual
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class RequestPutActiveStatusDto(
    @Contextual
    @SerialName("activeStatus")
    val activeStatus: ActiveStatus
)
