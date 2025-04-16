import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, MatIcon],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
