import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookLoginComponent } from './facebook-login.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [FacebookLoginComponent],
  exports: [FacebookLoginComponent]
})
export class FacebookLoginModule { }
