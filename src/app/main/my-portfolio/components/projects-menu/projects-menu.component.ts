import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-projects-menu',
  templateUrl: './projects-menu.component.html',
  styleUrl: './projects-menu.component.scss'
})
export class ProjectsMenuComponent {
  @Output() filterChange = new EventEmitter<any>();
  isDefault = true;
  isHtmlMenuOpen = false;
  isAngularMenuOpen = false;
  isFigmaMenuOpen = false;

  toggleMenu(menu: string) {
    switch (menu) {
      case 'html':
        this.isHtmlMenuOpen = !this.isHtmlMenuOpen;
        this.isAngularMenuOpen = false;
        this.isFigmaMenuOpen = false;
        this.isDefault = false;
        break;
      case 'angular':
        this.isAngularMenuOpen = !this.isAngularMenuOpen;
        this.isHtmlMenuOpen = false;
        this.isFigmaMenuOpen = false;
        this.isDefault = false;
        break;
      case 'figma':
        this.isFigmaMenuOpen = !this.isFigmaMenuOpen;
        this.isHtmlMenuOpen = false;
        this.isAngularMenuOpen = false;
        this.isDefault = false;
        break;
      default:
        this.isHtmlMenuOpen = false;
        this.isAngularMenuOpen = false;
        this.isFigmaMenuOpen = false;
        this.isDefault = true;
        break;
    }
  }

  filtrosPrueba(menuType: string) {
    if (menuType === 'html') {
      this.filterChange.emit({
        technologies: ['HTML', 'CSS', 'JS'],
        category: null
      });
    } else if (menuType === 'angular') {
      this.filterChange.emit({
        technologies: ['Angular'],
        category: null
      });
    } else if (menuType === 'figma') {
      this.filterChange.emit({
        technologies: ['Figma'],
        category: null
      });
    }
  }

  filterPersonal() {
    this.filterChange.emit({
      technologies: ['HTML', 'CSS', 'JS'],
      category: 'personal'
    });
  }

  filterClient() {
    this.filterChange.emit({
      technologies: ['HTML', 'CSS', 'JS'],
      category: 'client'
    });
  }
}
