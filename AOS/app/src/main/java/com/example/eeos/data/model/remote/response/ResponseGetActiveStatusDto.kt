package com.example.eeos.data.model.remote.response

import com.example.eeos.domain.model.ActiveStatus
import kotlinx.serialization.Contextual
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class ResponseGetActiveStatusDto(
    @SerialName("name")
    val name: String,
    @Contextual
    @SerialName("activeStatus")
    val activeStatus: String
) {
    fun toActiveStatus(): ActiveStatus =
        ActiveStatus(
            name = name,
            activeStatus = when (activeStatus) {
                "am" -> "AM"
                "cm" -> "CM"
                "rm" -> "RM"
                "ob" -> "OB"
                else -> ""
            }
        )
}
