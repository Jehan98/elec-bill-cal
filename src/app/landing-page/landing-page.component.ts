import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  from_date = new Date(2022, 1, 14);
  to_date = new Date(2022, 1, 15);
  units = 0;
  data = '';

  constructor(private api_service: ApiService) {}

  onSubmit() {
    console.log(this.from_date);
    this.api_service.getData().subscribe((data) => {
      this.data = data;
    });
  }
}
