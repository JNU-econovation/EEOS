package com.example.eeos.data.service

import com.example.eeos.data.model.remote.response.ResponseGetActiveStatusDto
import com.example.eeos.data.model.remote.response.ResponsePutActiveStatusDto
import com.example.eeos.data.model.remote.response.base.BaseResponse
import retrofit2.http.GET
import retrofit2.http.PUT

interface InfoService {
    @GET("members/activeStatus")
    suspend fun getActiveStatus(): BaseResponse<ResponseGetActiveStatusDto>

    @PUT("members/activeStatus")
    suspend fun putActiveStatus(): BaseResponse<ResponsePutActiveStatusDto>
}
