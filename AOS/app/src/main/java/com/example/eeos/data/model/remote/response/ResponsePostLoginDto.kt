package com.example.eeos.data.model.remote.response

import kotlinx.serialization.SerialName

data class ResponsePostLoginDto(
    @SerialName("accessToken")
    val accessToken: String,
    @SerialName("accessExpiredTime")
    val accessExpiredTime: Long
)
