import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-characters',
  standalone: true,
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
  imports: [NavbarComponent, RouterOutlet],
})
export class CharactersComponent {}
