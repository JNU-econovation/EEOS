package com.example.eeos.data.model.remote.response

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class ResponsePutActiveStatusDto(
    @SerialName("name")
    val name: String,
    @SerialName("activeStatus")
    val activeStatus: String
)
