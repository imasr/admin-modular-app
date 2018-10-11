import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { DashboardComponent } from './dashboard.component';
import { LinkedInLoginModule } from 'app/authentication/linked-in-login/linked-in-login.module';

const routes = [
    {
        path: '',
        component: DashboardComponent
    }
];

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule,
        LinkedInLoginModule
    ],
    exports: [
        DashboardComponent
    ]
})

export class DashboardModule {
}
