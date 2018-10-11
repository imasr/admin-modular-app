import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkedInLoginComponent } from './linked-in-login.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [LinkedInLoginComponent],
  exports: [LinkedInLoginComponent],
})
export class LinkedInLoginModule { }
