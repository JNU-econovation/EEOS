package com.example.eeos.data.model.remote.response

import com.example.eeos.domain.model.Program
import kotlinx.serialization.Contextual
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class ResponseGetProgramListDto(
    @SerialName("size")
    val size: Int,
    @SerialName("page")
    val page: Int,
    @SerialName("totalPage")
    val totalPage: Int,
    @SerialName("programs")
    val programs: List<GetProgramDto>
) {
    @Serializable
    data class GetProgramDto(
        @SerialName("programId")
        val programId: Int,
        @SerialName("title")
        val title: String,
        @SerialName("deadLine")
        val deadLine: String,
        @Contextual
        @SerialName("category")
        val category: String,
        @Contextual
        @SerialName("programStatus")
        val programStatus: String,
        @Contextual
        @SerialName("type")
        val type: String
    )

    fun toProgramList(): List<Program> = programs.map { program ->
        Program(
            programId = program.programId,
            title = program.title,
            deadLine = program.deadLine,
            category = program.category,
            programStatus = program.programStatus,
            type = program.type
        )
    }
}
