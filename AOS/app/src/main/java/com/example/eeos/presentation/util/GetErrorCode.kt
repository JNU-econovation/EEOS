package com.example.eeos.presentation.util

import org.json.JSONObject

fun getErrorCode(e: String): String {
    val jsonObject = JSONObject(e)
    return jsonObject.getString("code")
}