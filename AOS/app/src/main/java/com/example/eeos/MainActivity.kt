package com.example.eeos

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.example.eeos.ui.home.ProgramData
import com.example.eeos.ui.home.ProgramList
import com.example.eeos.ui.theme.EeosTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            EeosTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    ProgramList(
                        listOf(
                            ProgramData(date = "2023년 11월 06일 (월)", title = "오늘의 행사 두구두구"),
                            ProgramData(date = "2023년 11월 06일 (월)", title = "오늘의 행사 두구두구")
                        )
                    )
                }
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    EeosTheme {
        ProgramList(
            listOf(
                ProgramData(date = "2023년 11월 06일 (월)", title = "오늘의 행사 두구두구"),
                ProgramData(date = "2023년 11월 06일 (월)", title = "오늘의 행사 두구두구")
            )
        )
    }
}
