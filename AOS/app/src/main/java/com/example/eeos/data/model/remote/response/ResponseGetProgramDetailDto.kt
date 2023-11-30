package com.example.eeos.data.model.remote.response

import com.example.eeos.consts.Category
import com.example.eeos.consts.ProgramStatus
import com.example.eeos.consts.ProgramType
import kotlinx.serialization.Contextual
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class ResponseGetProgramDetailDto(
    @SerialName("programId")
    val programId: Int,
    @SerialName("title")
    val title: String,
    @SerialName("deadLine")
    val deadLine: String,
    @SerialName("content")
    val content: String,
    @Contextual
    @SerialName("category")
    val category: Category,
    @SerialName("programStatus")
    @Contextual
    val programStatus: ProgramStatus,
    @Contextual
    @SerialName("type")
    val type: ProgramType
)
