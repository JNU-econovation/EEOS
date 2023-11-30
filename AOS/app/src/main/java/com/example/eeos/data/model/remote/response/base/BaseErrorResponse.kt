package com.example.eeos.data.model.remote.response.base

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class BaseErrorResponse(
    @SerialName("status")
    val status: String,
    @SerialName("code")
    val code: Int,
    @SerialName("message")
    val message: String
)
