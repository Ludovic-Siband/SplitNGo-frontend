import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CardTravelComponent } from '../../features/travel/card-travel/card-travel.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, MatIcon, CardTravelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'Mes voyages';

  openFormAddTravel() {
    console.log('openFormAddTravel');
  }
}
