package com.example.eeos.data.repository

import com.example.eeos.data.model.remote.request.RequestPutActiveStatusDto
import com.example.eeos.data.source.InfoDataSource
import com.example.eeos.domain.model.ActiveStatus
import com.example.eeos.domain.repository.InfoRepository
import javax.inject.Inject

class InfoRepositoryImpl @Inject constructor(
    private val infoDataSource: InfoDataSource
) : InfoRepository {
    override suspend fun getActiveStatus(): Result<ActiveStatus> =
        runCatching {
            infoDataSource.getActiveStatus().data!!.toActiveStatus()
        }

    override suspend fun putActiveStatus(requestPutActiveStatusDto: RequestPutActiveStatusDto): Result<Unit> =
        runCatching {
            infoDataSource.putActiveStatus(requestPutActiveStatusDto).data
        }
}
