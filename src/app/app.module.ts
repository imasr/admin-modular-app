import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { DashboardModule } from 'app/main/dashboard/dashboard.module';

const appRoutes: Routes = [
    { path: 'auth/login', loadChildren: './authentication/login/login.module#LoginModule', data: { title: 'Login' } },
    { path: 'auth/register', loadChildren: './authentication/register/register.module#RegisterModule', data: { title: 'Registration' } },
    { path: 'auth/reset-password', loadChildren: './authentication/reset-password/reset-password.module#ResetPasswordModule', data: { title: 'Reset Password' } },
    { path: 'auth/forgot-password', loadChildren: './authentication/forgot-password/forgot-password.module#ForgotPasswordModule', data: { title: 'Forgot Password' } },
    { path: 'dashboard', loadChildren: './main/dashboard/dashboard.module#DashboardModule', data: { title: 'Dashboard' } },
    { path: '**', redirectTo: 'auth/login' }

];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        DashboardModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
