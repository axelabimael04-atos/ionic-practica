/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
  ) {}
  // Sign in with email/password
  async signIn(email: string, password: string) {
    const result = await this.afAuth.signInWithEmailAndPassword(email, password);
    console.log(result.user.email);
    this.router.navigate(['/tabs']);
  }
  // Sign up with email/password
  async signUp(email: string, password: string) {
    const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
    this.router.navigate(['/tabs']);
  }
}
