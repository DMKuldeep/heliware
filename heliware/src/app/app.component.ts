import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zenatix';
  loginForm= new FormGroup({
    user:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)]) 
  })
  loginUser()
  {
    console.warn(this.loginForm.value);
  }
  get user()
  {
    return this.loginForm.get('user');

  }
  get password()
  {
    return this.loginForm.get('password');

  }
  clickMethod() {
    alert('LogIn Succesfull');
  }

}
