package com.example.eeos.presentation.detail

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.eeos.consts.categoryChips
import com.example.eeos.domain.model.Member
import com.example.eeos.domain.repository.ProgramRepository
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import retrofit2.HttpException
import java.io.IOException
import javax.inject.Inject

data class DetailUiState(
    val isError: Boolean = false,
    val isLoading: Boolean = false,

    val category: String = "",
    val title: String = "",
    val deadLine: String = "",
    val content: String = "",

    val attendMembers: List<Member>? = null,
    val absentMembers: List<Member>? = null,
    val perceiveMembers: List<Member>? = null,
    val nonResponseMembers: List<Member>? = null
)

@HiltViewModel
class DetailViewModel @Inject constructor(
    private val programRepository: ProgramRepository
): ViewModel() {
    private val _detailUiState = MutableStateFlow(DetailUiState())
    val detailUiState = _detailUiState.asStateFlow()

    fun getProgramDetail(programId: Int) {
        viewModelScope.launch {
            programRepository.getProgramDetail(programId)
                .onSuccess { programDetail ->
                    val category = categoryAdjustment(programDetail.category)
                    val title = if (programDetail.type == "demand") { titleAdjustment(programDetail.title) } else { programDetail.title}
                    val deadLine = deadLineAdjustment(programDetail.deadLine)

                    _detailUiState.update { currentState ->
                        currentState.copy(
                            category = category,
                            title = title,
                            deadLine = deadLine,
                            content = programDetail.content
                        )
                    }
                }
                .onFailure {
                        exception ->
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

    private fun deadLineAdjustment(deadLine: String): String {
        /* TODO */
        return "날짜 조정 텍스트"
    }

    private fun titleAdjustment(title: String): String {
        return "[수요조사] $title"
    }
}