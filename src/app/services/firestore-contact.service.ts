import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
export interface Contact {
  c_id: string;
  mail: string;
  mobilenummer?: string;
  phonenumber?: string;
  prename?: string;
  name?: string;
  uid?: string;
}
@Injectable()

export class FirestoreContactService {
  private contact: Observable<any>;

  constructor(private firestore: AngularFirestore) { }
  createContact(record) {
    return this.firestore.collection('Contact').add(record);
  }
  readContact(uid: string) {
    this.contact = this.firestore.collection('Contact', ref => ref.where('uid', '==', uid)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data =  a.payload.doc.data();
          const id = a.payload.doc.id;
          return {data};
        });
      })
    );
    return this.contact;
  }
}
