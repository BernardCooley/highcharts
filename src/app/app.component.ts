import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DisplayDashboardService } from './../services/showDashboard.service';
import { jsonData } from './../data/jsonData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private router: Router;
  jsonData: any;

	constructor(r: Router, displayDashboardService: DisplayDashboardService) {
    this.jsonData = jsonData;
    this.router = r;
  }

  getCurrentDashboardJson(displayDashboardService: DisplayDashboardService) {
    console.log(displayDashboardService.sendCurrentDashboardJson());
		return displayDashboardService.sendCurrentDashboardJson();
	}

  redirect() {
    this.router.navigate(['dashboardIndex']);
  }

	ngOnInit() {

	}
}