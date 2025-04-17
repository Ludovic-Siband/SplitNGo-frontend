import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [MatIcon, RouterOutlet],
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'Mes voyages';

  openFormAddTravel() {
    console.log('openFormAddTravel');
  }
}
