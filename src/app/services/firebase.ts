import { Injectable } from '@angular/core';

import { initializeApp } from 'firebase/app';

import {
  getFirestore,
  collection,
  addDoc
} from 'firebase/firestore';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  firebaseApp = initializeApp(
    environment.firebaseConfig
  );

  db = getFirestore(this.firebaseApp);

  async guardarUbicacion(
    latitud: number,
    longitud: number
  ) {

    return await addDoc(

      collection(this.db, 'ubicaciones'),

      {
        latitud,
        longitud,
        fecha: new Date()
      }
    );
  }
}