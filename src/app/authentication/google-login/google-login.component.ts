import { Component, OnInit, EventEmitter, Input, Output, NgZone } from '@angular/core';
import { environment } from 'environments/environment';

declare const gapi: any;

@Component({
  selector: 'google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss']
})
export class GoogleLoginComponent implements OnInit {

  @Input() isGoogle: boolean;
  @Output() googleSignIn: EventEmitter<any> = new EventEmitter<any>();
  auth2: any;

  constructor(private zone: NgZone) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init(environment.googleConfig).then((success) => {
        // console.log('Libraries are initialized successfully');
      }).catch((error) => {
        console.log(error)
      });
    });
  }

  signInWithGoogle() {

    let googleAuth = gapi.auth2.getAuthInstance();
    googleAuth.signIn().then(googleUser => {
      let profile = googleUser.getBasicProfile();
      this.zone.run(() => {
        let googleData = {
          "google_id": profile.getId(),
          "username": profile.getName(),
          "image_url": profile.getImageUrl(),
          "email": profile.getEmail()
        };
        this.googleSignIn.emit(googleData);

      })

    }).catch(error => {
      console.log(error)
    })
  }
}
