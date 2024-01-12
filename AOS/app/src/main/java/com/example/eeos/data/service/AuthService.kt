package com.example.eeos.data.service

import com.example.eeos.data.model.remote.response.ResponsePostLoginDto
import com.example.eeos.data.model.remote.response.ResponseReIssueTokenDto
import com.example.eeos.data.model.remote.response.base.BaseResponse
import retrofit2.http.Header
import retrofit2.http.POST
import retrofit2.http.Query

interface AuthService {
    @POST("auth/login/slack")
    suspend fun postLogin(
        @Query(value = "code") code: String,
        @Query(value = "redirect_uri") redirectUri: String
    ): BaseResponse<ResponsePostLoginDto>

    @POST("auth/reissue")
    suspend fun reIssueToken(
        @Header(value = "Cookie") refreshToken: String
    ): BaseResponse<ResponseReIssueTokenDto>
}
