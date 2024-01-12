package com.example.eeos.presentation.util.ComponentUtil

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.dimensionResource
import com.example.eeos.R

@Composable
fun NonLazyGrid(
    columns: Int,
    itemCount: Int,
    modifier: Modifier = Modifier,
    content: @Composable (Int) -> Unit
) {
    Column(
        modifier = modifier
    ) {
        var rows = (itemCount / columns)
        if (itemCount.mod(columns) > 0) {
            rows += 1
        }

        for (rowId in 0 until rows) {
            val firstIndex = rowId * columns

            Row {
                for (columnId in 0 until columns) {
                    val index = firstIndex + columnId

                    Box(
                        modifier = Modifier.fillMaxWidth()
                            .weight(1f),
                        contentAlignment = Alignment.Center
                    ) {
                        if (index < itemCount) {
                            content(index)
                        }
                    }
                }
            }
            Spacer(
                modifier = Modifier.height(
                    dimensionResource(
                        R.dimen.margin_detail_screen_space_between_member_list_content
                    )
                )
            )
        }
    }
}
