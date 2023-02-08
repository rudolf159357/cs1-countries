import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './components/countries/countries.component';
import { AmericaDetailsComponent } from './view/america-details/america-details.component';
import { AmericaComponent } from './view/america/america.component';
import { AsiaDetailsComponent } from './view/asia-details/asia-details.component';
import { AsiaComponent } from './view/asia/asia.component';
import { ComparatorComponent } from './view/comparator/comparator.component';
import { EuropeDetailsComponent } from './view/europe-details/europe-details.component';
import { EuropeComponent } from './view/europe/europe.component';
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "countries", component: CountriesComponent},
  {path: "europe", component: EuropeComponent},
  {path: "america", component: AmericaComponent},
  {path: "asia", component: AsiaComponent},                                                                                                                             
  {path: "europe/details/:id", component: EuropeDetailsComponent},                                                                                                                             
  {path: "america/details/:id", component: AmericaDetailsComponent},                                                                                                                             
  {path: "asia/details/:id", component: AsiaDetailsComponent},     
  {path: "comparator", component: ComparatorComponent},     
  { path: '**', redirectTo: '' }                                                                                                                        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
