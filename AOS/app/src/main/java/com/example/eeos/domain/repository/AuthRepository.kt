package com.example.eeos.domain.repository

import com.example.eeos.data.model.remote.response.ResponsePostLoginDto
import com.example.eeos.data.model.remote.response.ResponseReIssueTokenDto
import com.example.eeos.data.model.remote.response.base.BaseResponse
import com.skydoves.sandwich.ApiResponse

interface AuthRepository {
    suspend fun postLogin(
        code: String
    ): ApiResponse<BaseResponse<ResponsePostLoginDto>>

    suspend fun reIssueToken(
        refreshToken: String
    ): Result<ResponseReIssueTokenDto>
}
