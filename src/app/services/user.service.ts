import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {

  constructor() { }
  passwortReset(email: string) {
    const promise = new Promise((resolve, reject) => {
      firebase.auth().sendPasswordResetEmail(email).then( () => {
        resolve(
          {success: true}
        );
      }).catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email': {
            reject({
              success: false,
              errCode: 'Keine gültige Email Adresse'
            });
            break;
          }
          case 'auth/user-not-found': {
            reject({
              success: false,
              errCode: 'Diese Email Adresse ist mit keinem ITS.Connect Konto verknüpft'
            });
            break;
          }
          default: {
            reject({
              success: false,
              errCode: error.code
            });
            break;
          }
        }
      });
    });
    return promise;
  }
}
