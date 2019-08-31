import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class CrudService {
  constructor(private firestore: AngularFirestore) { }

createCompany(record) {
  return this.firestore.collection('Company').add(record);
}
readCompany() {
  return this.firestore.collection('Company').snapshotChanges();
}
updateCompany(recordID, record) {
  return this.firestore.doc('Company/' + recordID).update(record);
}
deleteCompany(recordID) {
  this.firestore.doc('Company/' + recordID).delete();
}
}
