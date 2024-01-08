package com.example.eeos.domain.repository

import com.example.eeos.data.model.remote.response.ResponsePostLoginDto
import com.example.eeos.data.model.remote.response.ResponseReIssueTokenDto

interface AuthRepository {
    suspend fun postLogin(
        code: String
    ): Result<ResponsePostLoginDto>

    suspend fun reIssueToken(
        refreshToken: String
    ): Result<ResponseReIssueTokenDto>
}
