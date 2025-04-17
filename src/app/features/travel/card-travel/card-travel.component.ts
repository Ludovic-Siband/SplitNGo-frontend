import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDateTravelComponent } from '../card-date-travel/card-date-travel.component';

@Component({
  selector: 'app-card-travel',
  standalone: true,
  imports: [CommonModule, CardDateTravelComponent],
  templateUrl: './card-travel.component.html',
  styleUrl: './card-travel.component.scss',
})
export class CardTravelComponent {
  @Input() isArchived = false;
}
