package com.example.eeos.data.repository

import com.example.eeos.data.model.remote.request.RequestPutActiveStatusDto
import com.example.eeos.data.model.remote.response.ResponseGetActiveStatusDto
import com.example.eeos.data.model.remote.response.ResponsePutActiveStatusDto
import com.example.eeos.data.model.remote.response.base.BaseResponse
import com.example.eeos.data.source.InfoDataSource
import com.example.eeos.domain.repository.InfoRepository
import com.skydoves.sandwich.ApiResponse
import javax.inject.Inject

class InfoRepositoryImpl @Inject constructor(
    private val infoDataSource: InfoDataSource
) : InfoRepository {
    override suspend fun getActiveStatus(): ApiResponse<BaseResponse<ResponseGetActiveStatusDto>> =
        infoDataSource.getActiveStatus()

    override suspend fun putActiveStatus(requestPutActiveStatusDto: RequestPutActiveStatusDto): ApiResponse<BaseResponse<ResponsePutActiveStatusDto>> =
        infoDataSource.putActiveStatus(requestPutActiveStatusDto)
}
