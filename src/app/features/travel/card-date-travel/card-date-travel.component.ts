import { Component, OnInit, signal } from '@angular/core';
import { Trip } from '../../../core/interfaces/trips.models';
import { SplitngoService } from '../../../core/services/splitngo.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-card-date-travel',
  imports: [DatePipe],
  templateUrl: './card-date-travel.component.html',
  styleUrl: './card-date-travel.component.scss',
  providers: [DatePipe],
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
