import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyCarrearComponent } from './main/my-carrear/my-carrear.component';
import { MyPortfolioComponent } from './main/my-portfolio/my-portfolio.component';
import { ContactComponent } from './main/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'mi-carrera', component: MyCarrearComponent },
  { path: 'portafolio', component: MyPortfolioComponent},
  { path: 'contacto', component: ContactComponent },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
