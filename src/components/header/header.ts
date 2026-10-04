import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  isMenuOpen = false;
  activeSection = 'home';  

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    this.activeSection = sectionId; 
    this.isMenuOpen = false;

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }
}