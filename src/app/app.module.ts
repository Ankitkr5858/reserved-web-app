import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AngularFireStorageModule } from 'angularfire2/storage';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExploreComponent } from './explore/explore.component';
// import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
// import { RegistrationComponent } from './auth/registration/registration.component';
import { SplashComponent } from './splash/splash.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DeliveryService } from './delivery.service';
import { PersonalContentComponent } from './personal-content/personal-content.component';
// for Router import:
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
// for Http requests
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { ImageListComponent } from './images/image-list/image-list.component';
import { ImageComponent } from './images/image/image.component';
import { ImagesComponent } from './images/images.component';


@NgModule({
  declarations: [
    AppComponent,
    ExploreComponent,
    SplashComponent,
    LoginComponent,
    SignUpComponent,
    NavbarComponent,
    PersonalContentComponent,
    ImagesComponent,
    ImageComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    FormsModule,
    MatIconModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    MatCardModule,
    MaterialFileInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule
    
  ],
  providers: [DeliveryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
