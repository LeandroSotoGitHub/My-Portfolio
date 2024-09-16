import { Component } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-my-carrear',
  templateUrl: './my-carrear.component.html',
  styleUrl: './my-carrear.component.scss'
})
export class MyCarrearComponent {
  ngOnInit(): void {
    this.initializeScrollReveal();
  }
  initializeScrollReveal(): any {
    ScrollReveal().reveal('.reveal', {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
      interval: 500,
    });
  }
}
