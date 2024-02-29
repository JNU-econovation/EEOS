package com.example.eeos.domain.repository

import com.example.eeos.data.model.remote.request.RequestPutActiveStatusDto
import com.example.eeos.data.model.remote.response.ResponseGetActiveStatusDto
import com.example.eeos.data.model.remote.response.ResponsePutActiveStatusDto
import com.example.eeos.data.model.remote.response.base.BaseResponse
import com.skydoves.sandwich.ApiResponse

interface InfoRepository {
    suspend fun getActiveStatus(): ApiResponse<BaseResponse<ResponseGetActiveStatusDto>>

    suspend fun putActiveStatus(
        requestPutActiveStatusDto: RequestPutActiveStatusDto
    ): ApiResponse<BaseResponse<ResponsePutActiveStatusDto>>
}
