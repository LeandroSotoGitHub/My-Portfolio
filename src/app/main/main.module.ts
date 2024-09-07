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


@NgModule({
  declarations: [
    MainComponent,
    MyCarrearComponent,
    TechnicalSkillsComponent,
    ExperienceComponent,
    AboutMeComponent,
    LenguagesComponent,
    SoftSkillsComponent,
    EducationComponent
  ],
  exports:[
    MainComponent
  ],
  imports: [
    CommonModule,
    mainRoutingModule,
    SharedModule
  ]
})
export class PortfolioModule { }
