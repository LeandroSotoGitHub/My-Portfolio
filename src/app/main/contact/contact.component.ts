import { Component } from '@angular/core';
import ScrollReveal from 'scrollreveal';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
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
