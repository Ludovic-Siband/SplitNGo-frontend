import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDateTravelComponent } from './card-date-travel.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SplitngoService } from '../../../core/services/splitngo.service';

describe('CardDateTravelComponent', () => {
  let component: CardDateTravelComponent;
  let fixture: ComponentFixture<CardDateTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDateTravelComponent, HttpClientTestingModule],
      providers: [SplitngoService],
    }).compileComponents();

    fixture = TestBed.createComponent(CardDateTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
