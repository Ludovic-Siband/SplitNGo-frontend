import { Component, Input, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDateTravelComponent } from '../card-date-travel/card-date-travel.component';
import { Trip } from '../../../core/interfaces/trips.models';
import { SplitngoService } from '../../../core/services/splitngo.service';

@Component({
  selector: 'app-card-travel',
  standalone: true,
  imports: [CommonModule, CardDateTravelComponent],
  templateUrl: './card-travel.component.html',
  styleUrl: './card-travel.component.scss',
})
export class CardTravelComponent implements OnInit {
  @Input() isArchived = false;
  trips$$ = signal<Trip[]>([]);

  constructor(private splitngoService: SplitngoService) {}

  ngOnInit() {
    this.splitngoService.getTripList().subscribe({
      next: trips => this.trips$$.set(trips),
      error: err => console.error('Erreur lors du chargement des voyages', err),
    });
  }
}
