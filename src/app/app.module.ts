import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './view/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import { EuropeComponent } from './view/europe/europe.component';
import { AmericaComponent } from './view/america/america.component';
import { AsiaComponent } from './view/asia/asia.component';
import { DetailsComponent } from './components/details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CountriesComponent,
    EuropeComponent,
    AmericaComponent,
    AsiaComponent,
    DetailsComponent,
 ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
