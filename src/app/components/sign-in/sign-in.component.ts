import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import * as auth from 'firebase/auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  onClick(){
    this.authService.signIn('axel_aam@hotmail.com', '00zZ5500');
  }

}
