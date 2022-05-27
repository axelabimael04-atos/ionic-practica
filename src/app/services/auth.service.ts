/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }
  // Sign in with email/password
  // TODO: use sign-in to get user and provide the user on a behavior subject over the application

  currentUser$: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  signIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(async (result) => {
        this.currentUser$.next({uid: result.user.uid, email: result.user.email})
        this.router.navigate(['/tabs']);
      });
  }

  // Sign up with email/password
  signUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.currentUser$.next({uid: result.user.uid, email: result.user.email})
        this.router.navigate(['/tabs']);
      });
  }
}
