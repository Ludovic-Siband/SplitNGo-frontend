import { Component, OnInit, signal } from '@angular/core';
import { Trip } from '../../../core/interfaces/trips.models';
import { SplitngoService } from '../../../core/services/splitngo.service';

@Component({
  selector: 'app-card-date-travel',
  imports: [],
  templateUrl: './card-date-travel.component.html',
  styleUrl: './card-date-travel.component.scss',
})
export class CardDateTravelComponent implements OnInit {
  trips$$ = signal<Trip[]>([]);

  constructor(private splitngoService: SplitngoService) {}

  ngOnInit() {
    this.splitngoService.getTripList().subscribe({
      next: trips => this.trips$$.set(trips),
      error: err => console.error('Erreur lors du chargement des voyages', err),
    });
  }
}
