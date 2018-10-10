import { Component } from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';
import { GlobalService } from '../../services/global-service';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    user: any;
    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private globalService: GlobalService
    ) {
        this._fuseTranslationLoaderService.loadTranslations(english, turkish);
    }

    ngOnInit(): void {
        const userInfo = JSON.parse(this.globalService.getItem)
        if (!!userInfo)
            this.user = userInfo;
    }
}
