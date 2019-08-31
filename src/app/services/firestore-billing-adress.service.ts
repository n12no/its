import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class FirestoreBillingAdressService {

  constructor(private firestore: AngularFirestore) { }
  createRecord(record) {
    return this.firestore.collection('BillingAdress').add(record);
  }
}
