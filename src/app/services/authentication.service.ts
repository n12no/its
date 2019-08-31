import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {

  constructor() { }
  registerUser(email: string, password: string) {
    return new Promise<firebase.auth.UserCredential>((resolve, reject) => {
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
    const user = firebase.auth().currentUser;

    if (user) {
      return user;
    } else {
      return null;
    }
  }
  userToken(): any {
    const user = this.userDetails();
    user.getIdToken().then((idToken) => {
      console.log('UserToken' + idToken);
      return idToken;
    }).catch((error) => {
      console.log(error);
    });
  }
  editUser(userName?: string, email?: string) {
    const user = this.userDetails();
    if (userName) {
      user.updateProfile({
        displayName: userName
      }).then(() => {
        console.log('UpdateProfile: ' + userName);
      }).catch((error) => {
        console.log(error);
      });
    }
    if (email) {
      user.updateEmail(email).then(() => {
        console.log('UpdateEmail:' + user.displayName + email);
      }).catch((error) => {
        console.log(error);
      });
    }
  }
}
