import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class FirestoreContactService {

  constructor(private firestore: AngularFirestore) { }
  createContact(record) {
    return this.firestore.collection('Contact').add(record);
  }
}
