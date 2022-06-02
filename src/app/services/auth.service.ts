/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { switchMap } from 'rxjs/operators';
import { Roles, User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser$: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {}
  // Sign in with email/password
  // TODO: use sign-in to get user and provide the user on a behavior subject over the application

  signIn(email: string, password: string) {
    // return this.afAuth
    //   .signInWithEmailAndPassword(email, password)
    //   .then(async (result) => {
    //     const user: User = this.getUserData(result.user);
    //     this.currentUser$.next(user);
    //     this.router.navigate(['/tabs']);
    //   });

    const user: User = this.getUserData();
    this.currentUser$.next(user);
  }

  // Sign up with email/password
  signUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const user: User = this.getUserData();
        this.currentUser$.next(user);
        this.router.navigate(['/tabs']);
      });
  }

  getUserData(): User {

    const userRef: AngularFirestoreDocument<Roles> = this.afs.doc<Roles>(
      `/cities/AV8WGvw0SljzZg7ArvnA/settings/roles/central/oQ2yc9QjosUeSMpYLa7G6WORdhB2`
    );

    //TODO: obtener el valor del documento

    const data: User = {
      // uid: user.uid,
      // email: user.email,
      uid: 'oQ2yc9QjosUeSMpYLa7G6WORdhB2',
      email: 'axel_aam@hotmail.com',
      roles: {
        business: userRef['business'],
        deliveryman: userRef['deliveryman'],
        incomes: userRef['incomes'],
        orders: userRef['orders'],
      },
    };

    return data;
  }

  canRead(user: User): boolean {
    const allowed = ['orders'];
    return this.checkAutorization(user, allowed);
  }

  canEdit(user: User): boolean {
    const allowed = ['business', 'orders'];
    return this.checkAutorization(user, allowed);
  }

  canDelete(user: User): boolean {
    const allowed = ['business', 'deliveryman', 'incomes', 'orders'];
    return this.checkAutorization(user, allowed);
  }


  private checkAutorization(user: User, allowedRoles: string[]): boolean {
    if(!user) return false;
    for (const role of allowedRoles) {
      if(user.roles[role]){
        return true;
      }
    }
  }
}
