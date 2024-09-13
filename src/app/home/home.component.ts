import { Component, ViewEncapsulation } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

  ngOnInit(): void {
    this.initializeScrollReveal();
  }

  initializeScrollReveal(): any {
    ScrollReveal().reveal('.welcomeMain', {
      distance: "50px",
      duration: 1000,
      easing: 'ease-in-out',
      reset: true,  // Si deseas que la animación se repita al volver a hacer scroll
    });
  }
}
