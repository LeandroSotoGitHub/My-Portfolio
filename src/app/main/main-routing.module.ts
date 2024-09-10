import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { HtmlTodosComponent } from './my-portfolio/components/html,css,js-components/html-todos/html-todos.component';
import { HtmlClientesComponent } from './my-portfolio/components/html,css,js-components/html-clientes/html-clientes.component';
import { HtmlPersonalComponent } from './my-portfolio/components/html,css,js-components/html-personal/html-personal.component';
import { FigmaTodosComponent } from './my-portfolio/components/figma-components/figma-todos/figma-todos.component';
import { FigmaClientesComponent } from './my-portfolio/components/figma-components/figma-clientes/figma-clientes.component';
import { FigmaPersonalComponent } from './my-portfolio/components/figma-components/figma-personal/figma-personal.component';
import { AngularComponent } from './my-portfolio/components/angular-components/angular/angular.component';

const routes: Routes = [
  // { path: 'portafolio', component: MyPortfolioComponent, children:[
  //     {path: 'html', component: HtmlTodosComponent, children:[
  //         {path: 'clientes', component: HtmlClientesComponent},
  //         {path: 'personal', component: HtmlPersonalComponent}
  //     ]},
  //     {path: 'figma', component: FigmaTodosComponent, children:[
  //         {path: 'clientes', component: FigmaClientesComponent},
  //         {path: 'personal', component: FigmaPersonalComponent}
  //     ]},
  //     {path: 'angular', component: AngularComponent},
  // ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class mainRoutingModule { }
