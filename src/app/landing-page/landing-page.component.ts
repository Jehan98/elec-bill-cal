import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  from_date = new Date(2022, 1, 14);
  to_date = new Date(2022, 1, 15);
  units = 0;
  fixed_cost = '';
  variable_cost = '';

  constructor(private api_service: ApiService, private http: HttpClient) {}

  onSubmit() {
    console.log(this.from_date);
    this.api_service.getData(this.units).subscribe((data) => {
      this.fixed_cost = data.fixed_cost;
      this.variable_cost = data.variable_cost;
      console.log(data);
    });
  }
}
