import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from 'environments/environment';

declare const FB: any;


@Component({
  selector: 'facebook-login',
  templateUrl: './facebook-login.component.html',
  styleUrls: ['./facebook-login.component.scss']
})
export class FacebookLoginComponent implements OnInit {
  @Input() isFacebook: boolean;
  @Output() fbSignIn: EventEmitter<any> = new EventEmitter<any>();

  auth2: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    FB.init(environment.facebookConfig);
    FB.getLoginStatus((response) => {
      this.statusChangeCallback(response);
    });
  }


  statusChangeCallback(response: any): any {
    if (response.status === 'connected') {
      console.log('connected');
    } else {
      console.log('loginnn required');
    }
  }

  facebookApi() {
    FB.api('/me?fields=id,email,name,gender,birthday,picture.width(150).height(150)', (res) => {
      console.log("Facebook ", res);
      this.fbSignIn.emit(res);
      // let fbdata = {
      //   'email': res.email,
      //   'username': res.name,
      //   'gender': res.gender,
      //   'image_url': res.picture.data.url,
      //   'fb_id': res.id,
      //   'birthday': res.birthday
      // };
    });
  }

  signInWithFB() {
    FB.login((result) => {
      if (result.status === 'connected') {
        this.facebookApi();
      }
    }, { scope: 'email' });
  }

}


