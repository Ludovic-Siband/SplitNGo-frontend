import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormTravelComponent } from './create-form-travel.component';

describe('CreateFormTravelComponent', () => {
  let component: CreateFormTravelComponent;
  let fixture: ComponentFixture<CreateFormTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFormTravelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateFormTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
