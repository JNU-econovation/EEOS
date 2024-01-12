package com.example.eeos.data.model.remote.response

import com.example.eeos.domain.model.Member
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
        val attendStatus: String
    )

    fun toMemberList(): List<Member> = members.map { member ->
        Member(
            name = member.name,
            attendStatus = member.attendStatus
        )
    }
}
