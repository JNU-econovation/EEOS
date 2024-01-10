package com.example.eeos.presentation.detail

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.eeos.consts.categoryChips
import com.example.eeos.domain.repository.ProgramRepository
import com.example.eeos.presentation.util.getDateTime
import dagger.hilt.android.lifecycle.HiltViewModel
import java.io.IOException
import javax.inject.Inject
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import retrofit2.HttpException

data class ProgramDetailUiState(
    val isError: Boolean = false,
    val isLoading: Boolean = false,

    val category: String = "",
    val title: String = "",
    val deadLine: String = "",
    val content: String = "",
    val programType: String = ""
)

@HiltViewModel
class ProgramDetailViewModel @Inject constructor(
    private val programRepository: ProgramRepository,
) : ViewModel() {
    private val _detailUiState = MutableStateFlow(ProgramDetailUiState())
    val detailUiState = _detailUiState.asStateFlow()

    fun getProgramDetail(programId: Int) {
        viewModelScope.launch {
            programRepository.getProgramDetail(programId)
                .onSuccess { programDetail ->
                    val category = categoryAdjustment(programDetail.category)
                    val deadLine = "마감기한 : " + getDateTime(programDetail.deadLine)

                    _detailUiState.update { currentState ->
                        currentState.copy(
                            category = category,
                            title = programDetail.title,
                            deadLine = deadLine,
                            content = programDetail.content,
                            programType = programDetail.type
                        )
                    }
                }
                .onFailure { exception ->
                    when (exception) {
                        is HttpException -> {
                            _detailUiState.update { currentState ->
                                currentState.copy(
                                    isError = true
                                )
                            }
                        }

                        is IOException -> {
                            _detailUiState.update { currentState ->
                                currentState.copy(
                                    isError = true
                                )
                            }
                        }
                    }
                }
        }
    }

    private fun categoryAdjustment(category: String): String {
        return categoryChips[com.example.eeos.consts.category.indexOf(category)]
    }
}
