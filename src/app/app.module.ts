import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListingsComponent } from './listings/listings.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListingComponent } from './listing/listing.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';

export const firebaseConfig = {
    apiKey: "AIzaSyDphcAgYGisiCGamS5_2XiYbPp7p0Z3IXI",
    authDomain: "study-35305.firebaseapp.com",
    databaseURL: "https://study-35305.firebaseio.com",
    projectId: "study-35305",
    storageBucket: "study-35305.appspot.com",
    messagingSenderId: "850071496750"
};

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'listings', component: ListingsComponent},
  {path:'add-listing', component: AddListingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
