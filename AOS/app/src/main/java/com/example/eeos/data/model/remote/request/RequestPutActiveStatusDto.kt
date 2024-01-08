package com.example.eeos.data.model.remote.request

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class RequestPutActiveStatusDto(
    @SerialName("activeStatus")
    val activeStatus: String
)
