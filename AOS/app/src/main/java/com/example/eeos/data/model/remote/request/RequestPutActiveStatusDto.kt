package com.example.eeos.data.model.remote.request

import kotlinx.serialization.Contextual
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class RequestPutActiveStatusDto(
    @Contextual
    @SerialName("activeStatus")
    val activeStatus: String
)
