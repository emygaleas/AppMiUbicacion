import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import {SplashScreen} from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
  template: `<ion-app><ion-router-outlet /></ion-app>`
})
export class AppComponent {
  constructor(){
    this.showSplash();
  }

  async showSplash(){
    await SplashScreen.show({
      autoHide: true,
      showDuration: 5000, // Duración en milisegundos para mostrar el splash screen
    });
  }
}