package com.example.eeos

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.runtime.Composable
import androidx.compose.ui.tooling.preview.Preview
import com.example.eeos.navigation.EEOSNavGraph
import com.example.eeos.presentation.home.ProgramLists
import com.example.eeos.presentation.theme.EeosTheme
import dagger.hilt.android.AndroidEntryPoint

@AndroidEntryPoint
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        val appLinkIntent: Intent = intent
        val appLinkData: Uri? = appLinkIntent.data
        val code = appLinkData?.getQueryParameter("code")

        super.onCreate(savedInstanceState)
        setContent {
            EeosTheme {
                EEOSNavGraph(code = code)
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    EeosTheme {
        ProgramLists(
            loading = false,
            empty = false,
            programLists = listOf(),
            onProgramClick = {},
            loadMorePrograms = {}
        )
    }
}
