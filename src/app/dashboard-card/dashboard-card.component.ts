import { DisplayDashboardService } from './../../services/showDashboard.service';
import { DashboardPageComponent } from './../dashboard-page/dashboard-page.component';
import { Component, OnInit, Input } from '@angular/core';
import { AddDashboardComponent } from 'app/add-dashboard/add-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardService } from 'services/addDashboard.service';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {
	jsonData: any;
	dashboardArray: Array<JSON> = [];
	currentdashboardID: String;
	dashboardPageComponent: DashboardPageComponent;
	displayDashboardService: DisplayDashboardService;
	dashboardService: DashboardService;
	private router: Router;
	newDashboardJson: JSON;

	constructor(displayDashboardServiceIn: DisplayDashboardService, r: Router, dashboardServiceIn: DashboardService) {
		this.jsonData = this.getCurrentDashboardJson(displayDashboardServiceIn);
		this.displayDashboardService = displayDashboardServiceIn;
		this.router = r;
		this.getNewDashboard(dashboardServiceIn);
	}

	getCurrentDashboardJson(displayDashboardService: DisplayDashboardService) {
		return displayDashboardService.sendCurrentDashboardJson();
	}

	getDashboards() {
		// this.appendNewDashboard();
	}

	appendNewDashboard(newDashboardJson: JSON, dashboardService: DashboardService) {
		this.dashboardArray.push(newDashboardJson);

		this.dashboardArray = this.cleanArray(this.dashboardArray);
		// console.log(this.dashboardArray);
	}

	cleanArray(actual) {
		var newArray = new Array();
		for (var i = 0; i < actual.length; i++) {
			if (actual[i]) {
				newArray.push(actual[i]);
			}
		}
		return newArray;
	}

	getDashboardArray() {
		return this.dashboardArray;
	}

	getCurrentDashboardID(dashboardID: String) {
		this.getIDInput(dashboardID, this.displayDashboardService);
		this.redirect();
	}

	getIDInput(dashboardID: String, displayDashboardService: DisplayDashboardService) {
		displayDashboardService.getIDInputSer(dashboardID);
	}

	getNewDashboard(dashboardService: DashboardService) {
		this.dashboardArray = dashboardService.getNewDashboardArraySer();
		// console.log(this.dashboardArray);
		this.appendNewDashboard(this.newDashboardJson, dashboardService);
	}

	redirect() {
    	this.router.navigate(['dashboard']);
  	}

	ngOnInit() {
		this.getDashboards();
	}
}