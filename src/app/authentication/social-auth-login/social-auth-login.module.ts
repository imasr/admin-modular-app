import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialAuthLoginComponent } from './social-auth-login.component';
import { AuthServiceConfig, AuthService } from 'angularx-social-login';
import { provideConfig } from './social-auth-config';
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
