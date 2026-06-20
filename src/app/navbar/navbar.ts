import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// 1. Make sure RouterLink and RouterLinkActive are imported from the router package
import { RouterLink, RouterLinkActive } from '@angular/router'; 

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterLinkActive], 
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {


   isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}