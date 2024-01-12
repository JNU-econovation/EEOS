package com.example.eeos.presentation.util

import android.annotation.SuppressLint
import java.text.SimpleDateFormat
import java.util.Date

@SuppressLint("SimpleDateFormat")
fun getDateTime(date: String): String {
    return try {
        val dateFormat = SimpleDateFormat("yyyy년MM월dd일")
        val netDate = Date(date.toLong())

        dateFormat.format(netDate) + getDaysOfWeek(netDate)
    } catch (e: Exception) {
        e.toString()
    }
}

private fun getDaysOfWeek(date: Date): String {
    return when (date.day) {
        1 -> "(월)"
        2 -> "(화)"
        3 -> "(수)"
        4 -> "(목)"
        5 -> "(금)"
        6 -> "(토)"
        7 -> "(일)"
        else -> "error"
    }
}
