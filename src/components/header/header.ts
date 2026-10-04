import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ضروري باش نستعملو @if أو *ngIf فـ HTML

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    this.isMenuOpen = false;

    // مهلة صغيرة باش يتغلق المنيو فـ Mobile ويرجع السكرول سلس
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }
}