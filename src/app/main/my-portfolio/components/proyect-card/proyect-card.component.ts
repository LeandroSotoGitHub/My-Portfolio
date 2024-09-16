import { Component, Input } from '@angular/core';
import * as data from '../../../../assets/data/projects.json'

@Component({
  selector: 'app-proyect-card',
  templateUrl: './proyect-card.component.html',
  styleUrl: './proyect-card.component.scss'
})
export class ProyectCardComponent {
  projects: any[] = data.proyectos;
  filteredProjects: any[] = [...this.projects];

  @Input() set filterCriteria(criteria: any) {
    if (criteria) {
      this.applyFilter(criteria);
    }else {
      this.filteredProjects = this.projects; 
    }
  }

  applyFilter(criteria: any) {
    this.filteredProjects = this.projects.filter(project => {
      return criteria.technologies.every((tech: any) => project.technologies.includes(tech)) &&
             (!criteria.category || project.category === criteria.category);
    });
  }
}
