package com.example.eeos

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.runtime.Composable
import androidx.compose.ui.tooling.preview.Preview
import com.example.eeos.navigation.EEOSNavGraph
import com.example.eeos.presentation.home.ProgramLists
import com.example.eeos.presentation.theme.EeosTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            EeosTheme {
                EEOSNavGraph()
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    EeosTheme {
        ProgramLists(
            programLists = listOf(),
            onProgramClick = {}
        )
    }
}
