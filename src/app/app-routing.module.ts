import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './components/countries/countries.component';
import { DetailsComponent } from './components/details/details.component';
import { AmericaComponent } from './view/america/america.component';
import { AsiaComponent } from './view/asia/asia.component';
import { EuropeComponent } from './view/europe/europe.component';
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "countries", component: CountriesComponent},
  {path: "europe", component: EuropeComponent},
  {path: "america", component: AmericaComponent},
  {path: "asia", component: AsiaComponent},                                                                                                                             
  {path: "europe/details/:id", component: DetailsComponent},                                                                                                                             
  {path: "america/details/:id", component: DetailsComponent},                                                                                                                             
  {path: "asia/details/:id", component: DetailsComponent},                                                                                                                             
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
