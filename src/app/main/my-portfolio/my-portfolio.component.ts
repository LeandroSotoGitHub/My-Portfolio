import { Component } from '@angular/core';
import * as data from '../../assets/data/projects.json'

@Component({
  selector: 'app-my-portfolio',
  templateUrl: './my-portfolio.component.html',
  styleUrl: './my-portfolio.component.scss'
})
export class MyPortfolioComponent {
  selectedFilter: any;

  onFilterChange(filter: any) {
    console.log('Filtro recibido:', filter);
    this.selectedFilter = filter; // Actualiza el filtro seleccionado
  }
}
