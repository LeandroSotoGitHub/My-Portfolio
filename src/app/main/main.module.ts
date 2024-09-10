import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { mainRoutingModule } from './main-routing.module'
import { MainComponent } from './main.component';
import { MyCarrearComponent } from './my-carrear/my-carrear.component';
import { SharedModule } from '../shared/shared.module';
import { TechnicalSkillsComponent } from './my-carrear/components/technical-skills/technical-skills.component';
import { ExperienceComponent } from './my-carrear/components/experience/experience.component';
import { AboutMeComponent } from './my-carrear/components/about-me/about-me.component';
import { LenguagesComponent } from './my-carrear/components/lenguages/lenguages.component';
import { SoftSkillsComponent } from './my-carrear/components/soft-skills/soft-skills.component';
import { EducationComponent } from './my-carrear/components/education/education.component';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ProyectCardComponent } from './my-portfolio/components/proyect-card/proyect-card.component';
import { ProjectsMenuComponent } from './my-portfolio/components/projects-menu/projects-menu.component';
import { HtmlPersonalComponent } from './my-portfolio/components/html,css,js-components/html-personal/html-personal.component';
import { HtmlClientesComponent } from './my-portfolio/components/html,css,js-components/html-clientes/html-clientes.component';
import { HtmlTodosComponent } from './my-portfolio/components/html,css,js-components/html-todos/html-todos.component';
import { AngularComponent } from './my-portfolio/components/angular-components/angular/angular.component';
import { FigmaClientesComponent } from './my-portfolio/components/figma-components/figma-clientes/figma-clientes.component';
import { FigmaPersonalComponent } from './my-portfolio/components/figma-components/figma-personal/figma-personal.component';
import { FigmaTodosComponent } from './my-portfolio/components/figma-components/figma-todos/figma-todos.component';


@NgModule({
  declarations: [
    MainComponent,
    MyCarrearComponent,
    TechnicalSkillsComponent,
    ExperienceComponent,
    AboutMeComponent,
    LenguagesComponent,
    SoftSkillsComponent,
    EducationComponent,
    MyPortfolioComponent,
    ContactComponent,
    ProyectCardComponent,
    ProjectsMenuComponent,
    HtmlPersonalComponent,
    HtmlClientesComponent,
    HtmlTodosComponent,
    AngularComponent,
    FigmaClientesComponent,
    FigmaPersonalComponent,
    FigmaTodosComponent
  ],
  exports:[
    MainComponent
  ],
  imports: [
    CommonModule,
    mainRoutingModule,
    SharedModule,
  ]
})
export class PortfolioModule { }
