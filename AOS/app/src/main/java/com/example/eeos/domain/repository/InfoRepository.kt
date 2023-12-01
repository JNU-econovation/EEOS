package com.example.eeos.domain.repository

import com.example.eeos.domain.model.ActiveStatus

interface InfoRepository {
    suspend fun getActiveStatus(): Result<ActiveStatus>

    suspend fun putActiveStatus(
        activeStatus: ActiveStatus
    ): Result<Unit>
}
