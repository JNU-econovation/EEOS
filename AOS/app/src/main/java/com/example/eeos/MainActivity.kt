package com.example.eeos

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.runtime.Composable
import androidx.compose.ui.tooling.preview.Preview
import com.example.eeos.ui.detail.DetailScreen
import com.example.eeos.ui.home.ProgramLists
import com.example.eeos.ui.theme.EeosTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            EeosTheme {
                DetailScreen()
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    EeosTheme {
        ProgramLists(
            listOf()
        )
    }
}
