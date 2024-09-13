import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-projects-menu',
  templateUrl: './projects-menu.component.html',
  styleUrl: './projects-menu.component.scss'
})
export class ProjectsMenuComponent {
  @Output() filterChange = new EventEmitter<any>();
  
  activeMenu: string = 'all'; // Menú activo (HTML, Angular, Figma, etc.)
  openMenu: string | null = null; // Menú desplegado (HTML, Angular, Figma)

  toggleMenu(menu: string) {
    this.openMenu = this.openMenu === menu ? null : menu; // Abre o cierra el menú
  }

  applyFilter(technologies: string[], category: string | null, menu: string) {
    this.filterChange.emit({ technologies, category });
    this.activeMenu = menu; // Establece la sección activa
    this.openMenu = null; // Cierra el menú desplegable
  }

  mostrarTodosLosProyectos() {
    this.filterChange.emit(null); // Muestra todos los proyectos
    this.activeMenu = 'all'; // Resetea el menú activo
    this.openMenu = null; // Cierra todos los menús
  }
}
