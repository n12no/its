import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {

  constructor() { }
  registerUser(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        res => resolve(res),
        err => reject(err)
        );
    });
  }
  loginUser(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        res => resolve(res),
        err => reject(err)
        );
    });
  }
  logoutUser() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        const currentUser = firebase.auth().currentUser.email;
        firebase.auth().signOut()
        .then(() => {
          console.log('Service: log out' + currentUser);
          resolve();
        }).catch((error) => {
        reject(error);
        });
      }
    });
    }

    userDetails() {
      return firebase.auth().currentUser;
    }
  }
