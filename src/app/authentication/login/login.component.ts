import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global-service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    isGoogle: boolean = true;
    isFacebook: boolean = true;
    isLinkedin: boolean = true;


    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private _router: Router,
        private globalService: GlobalService,
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    onLogin() {
        console.log(this.loginForm.valid, this.loginForm.value);
        this._router.navigate(['dashboard'])
    }

    fbSignIn(e) {
        if (Object.keys(e).length) {
            this.globalService.setItem = JSON.stringify(e)
            this._router.navigate(['dashboard'])
        }
    }

    googleSignIn(e) {

        this.globalService.setItem = JSON.stringify(e)
        this._router.navigate(['dashboard'])
    }

    linkedinSignIn(e) {
        this.globalService.setItem = JSON.stringify(e)
        this._router.navigate(['dashboard'])
    }
}
