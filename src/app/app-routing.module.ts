import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyCarrearComponent } from './main/my-carrear/my-carrear.component';
import { MyPortfolioComponent } from './main/my-portfolio/my-portfolio.component';
import { ContactComponent } from './main/contact/contact.component';
import { HtmlTodosComponent } from './main/my-portfolio/components/html,css,js-components/html-todos/html-todos.component';
import { HtmlClientesComponent } from './main/my-portfolio/components/html,css,js-components/html-clientes/html-clientes.component';
import { HtmlPersonalComponent } from './main/my-portfolio/components/html,css,js-components/html-personal/html-personal.component';
import { FigmaTodosComponent } from './main/my-portfolio/components/figma-components/figma-todos/figma-todos.component';
import { FigmaClientesComponent } from './main/my-portfolio/components/figma-components/figma-clientes/figma-clientes.component';
import { FigmaPersonalComponent } from './main/my-portfolio/components/figma-components/figma-personal/figma-personal.component';
import { AngularComponent } from './main/my-portfolio/components/angular-components/angular/angular.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'mi-carrera', component: MyCarrearComponent },
  { path: 'portafolio', component: MyPortfolioComponent, children:[
    {path: 'html', component: HtmlTodosComponent, children:[
        {path: 'clientes', component: HtmlClientesComponent},
        {path: 'personal', component: HtmlPersonalComponent}
    ]},
    {path: 'figma', component: FigmaTodosComponent, children:[
        {path: 'clientes', component: FigmaClientesComponent},
        {path: 'personal', component: FigmaPersonalComponent}
    ]},
    {path: 'angular', component: AngularComponent},
]},
  { path: 'contacto', component: ContactComponent },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
