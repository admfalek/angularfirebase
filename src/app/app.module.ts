import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TopnavbarComponent } from './components/topnavbar/topnavbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthService } from './components/auth/auth.service';
import { AuthGuardService } from './components/auth/auth-guard.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { OrdersComponent } from './pages/orders/orders.component';

const config = {
    apiKey: 'AIzaSyD9PaTQ5iMDBTyGdqRou93ylmzojvc-N4c',
    authDomain: 'superframe-58469.firebaseapp.com',
    databaseURL: 'https://superframe-58469.firebaseio.com',
    projectId: 'superframe-58469',
    storageBucket: 'superframe-58469.appspot.com',
    messagingSenderId: '604684828107'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    TopnavbarComponent,
    FooterComponent,
    LoginComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
