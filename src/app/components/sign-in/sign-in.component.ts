import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  public userForm:FormGroup;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.minLength(6), Validators.required]),
    });
  }

  onClick() {
    console.log(this.userForm.value);
    // this.authService.signIn('axel_aam@hotmail.com', '00zZ5500');
  }
}
