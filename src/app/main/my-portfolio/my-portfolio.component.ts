import { Component } from '@angular/core';
import ScrollReveal from 'scrollreveal';


@Component({
  selector: 'app-my-portfolio',
  templateUrl: './my-portfolio.component.html',
  styleUrl: './my-portfolio.component.scss'
})
export class MyPortfolioComponent {
  selectedFilter: any;

  onFilterChange(filter: any) {
    this.selectedFilter = filter; // Actualiza el filtro seleccionado
  }
  
  ngOnInit(): void {
    this.initializeScrollReveal();
  }
  initializeScrollReveal(): any {
    ScrollReveal().reveal('.reveal', {
      distance: "50px",
      duration: 1000,
      easing: 'ease-in-out',
      reset: true,  // Si deseas que la animación se repita al volver a hacer scroll
    });
  }
}
