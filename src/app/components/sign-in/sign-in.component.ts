import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import * as auth from 'firebase/auth';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  userForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onClick() {
    console.warn(this.userForm.value);
    console.log(this.userForm.value);
    // this.authService.signIn('axel_aam@hotmail.com', '00zZ5500');
  }
}
