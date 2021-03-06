import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialAuthLoginComponent } from './social-auth-login.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [SocialAuthLoginComponent],
  exports: [SocialAuthLoginComponent],
})
export class SocialAuthLoginModule { }
