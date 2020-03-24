import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {
  MatButtonModule,
  MatGridListModule,
  MatNativeDateModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [    ],
  exports: [
    MatInputModule,
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    MatTooltipModule
  ],
})
export class MaterialModule {
}
