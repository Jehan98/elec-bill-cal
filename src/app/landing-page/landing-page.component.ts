import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  from_date_string = '2022-1-14';
  to_date_string = '2022-1-15';
  units = 0;
  monthlyUnits = 0;
  fixed_cost = '';
  variable_cost = '';

  constructor(private api_service: ApiService, private http: HttpClient) {}

  onSubmit() {
    const from_date = new Date(this.from_date_string);
    const to_date = new Date(this.to_date_string);

    const difference = to_date.getTime() - from_date.getTime();

    // Convert milliseconds to days
    const differenceDays = Math.floor(difference / (1000 * 60 * 60 * 24));
    console.log(differenceDays);
    if (differenceDays > 30) {
      this.monthlyUnits = Math.floor((this.units / differenceDays) * 30);
    } else {
      this.monthlyUnits = this.units;
    }
    console.log(this.monthlyUnits);
    this.api_service.getData(this.monthlyUnits).subscribe((data) => {
      this.fixed_cost = data.fixed_cost;
      this.variable_cost = data.variable_cost;
      console.log(data);
    });
  }
}
