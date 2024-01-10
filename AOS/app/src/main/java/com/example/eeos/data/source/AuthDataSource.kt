package com.example.eeos.data.source

import com.example.eeos.data.model.remote.response.ResponsePostLoginDto
import com.example.eeos.data.model.remote.response.ResponseReIssueTokenDto
import com.example.eeos.data.model.remote.response.base.BaseResponse
import com.example.eeos.data.service.AuthService
import com.skydoves.sandwich.ApiResponse
import javax.inject.Inject

class AuthDataSource @Inject constructor(
    private val authService: AuthService
) {
    suspend fun postLogin(
        code: String,
    ): ApiResponse<BaseResponse<ResponsePostLoginDto>> =
        authService.postLogin(
            code = code,
            redirectUri = "https://android.eeos.store"
        )

    suspend fun reIssueToken(
        refreshToken: String
    ): BaseResponse<ResponseReIssueTokenDto> =
        authService.reIssueToken(
            refreshToken = refreshToken
        )
}
