import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleLoginComponent } from './google-login.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [GoogleLoginComponent],
  exports: [GoogleLoginComponent]
})
export class GoogleLoginModule { }
