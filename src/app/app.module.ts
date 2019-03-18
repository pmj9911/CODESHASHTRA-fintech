import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {environment} from "../environments/environment";
import { RouterModule } from '@angular/router';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {HomeComponent} from "./home/home.component";
import{FooterComponent} from "./footer/footer.component";
import {UserRegisterComponent} from "./user-register/user-register.component";
import{InsideDonorComponent} from "./inside-donor/inside-donor.component";
import {DonorinfoComponent} from "./donorinfo/donorinfo.component";
import {ChildDonorComponent} from "./inside-donor/child-donor/child-donor.component";
import{ChildReceiverComponent} from "./donorinfo/child-receiver/child-receiver.component";


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
      HomeComponent,
      FooterComponent,
      UserRegisterComponent,
      InsideDonorComponent,
      DonorinfoComponent,
      ChildDonorComponent,
      ChildReceiverComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
      ReactiveFormsModule,
      AngularFireAuthModule,
      AngularFireDatabaseModule,
      AngularFirestoreModule,
      AngularFireModule.initializeApp(environment.Firebaseconfig),
      RouterModule.forRoot([
          {path:'signup',component:SignupComponent },
          {path:'login',component:LoginComponent},
        {path:'home',component:HomeComponent},
        {path:'footer',component:FooterComponent},
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path:'userreg',component:UserRegisterComponent},
        {path:'insideDonor',component:InsideDonorComponent, children:[
                {path:'childDonor', component:ChildDonorComponent}
            ]},
        {path:'donorinfo', component:DonorinfoComponent,children:[
            {path:'childReceiver',component:ChildReceiverComponent}
          ]},


          ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
