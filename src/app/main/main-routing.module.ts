import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



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
