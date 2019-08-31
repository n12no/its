import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class FirestoreCompanyAdressService {

  constructor(private firestore: AngularFirestore) {
   }
   createCompanyAdressRecord(record) {
     return this.firestore.collection('CompanyAdress').add(record);
   }
}
