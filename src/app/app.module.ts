import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {MisSalasPage} from '../pages/mis-salas/mis-salas';
import { MisSalasServiceProvider } from '../providers/mis-salas-service/mis-salas-service';
import {HttpModule} from '@angular/http';
import {SalaDetallePage} from '../pages/sala-detalle/sala-detalle';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MisSalasPage,
    SalaDetallePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MisSalasPage,
    SalaDetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MisSalasServiceProvider
  ]
})
export class AppModule {
}
