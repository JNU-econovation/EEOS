package com.example.eeos.data.model.remote.response

import com.example.eeos.consts.AttendStatus
import kotlinx.serialization.Contextual
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class ResponseGetMemberListDto(
    @SerialName("members")
    val members: List<GetMemberDto>
) {
    @Serializable
    data class GetMemberDto(
        @SerialName("memberId")
        val memberId: Int,
        @SerialName("name")
        val name: String,
        @Contextual
        @SerialName("attendStatus")
        val attendStatus: AttendStatus
    )
}
