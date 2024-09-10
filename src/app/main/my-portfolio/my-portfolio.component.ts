import { Component } from '@angular/core';
import * as data from '../../assets/data/projects.json'

@Component({
  selector: 'app-my-portfolio',
  templateUrl: './my-portfolio.component.html',
  styleUrl: './my-portfolio.component.scss'
})
export class MyPortfolioComponent {
  projects: any[] = data.proyectos;

  selectedFilter: any;

  onFilterChange(filter: any) {
    this.selectedFilter = filter; // Actualizamos el filtro seleccionado
  }
}
