import { Component } from '@angular/core';
import { UserInfo } from './interfaces/userinfo';

@Component({
  selector: 'body',
  templateUrl:'../html/login.component.html',
  styleUrls: ['../css/login.component.css']
})
export class LoginComponent {
  title = 'Welcome!!';
  txt_user_id = "leehc";
  fLogin(){


  }
}
