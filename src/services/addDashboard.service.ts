import { Injectable } from '@angular/core';
import { AddDashboardComponent } from '../app/add-dashboard/add-dashboard.component';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DashboardCardComponent } from 'app/dashboard-card/dashboard-card.component';

@Injectable()
export class DashboardService {
    newDashboardJson: JSON;
	dashboardArray: Array<JSON> = [];

	constructor() { }

	getNewDashboardInputSer(newDashboardJsonIn: JSON) {
		this.newDashboardJson = newDashboardJsonIn;
		this.dashboardArray.push(this.newDashboardJson);
		console.log(this.dashboardArray);
	}

	getNewDashboardSer() {
		return this.newDashboardJson;
	}

	getNewDashboardArraySer() {
		this.dashboardArray = this.cleanArray(this.dashboardArray);
		return this.dashboardArray;
	}

	getDashboardArray(dashboardArrayIn: Array<JSON>) {
		this.dashboardArray = dashboardArrayIn;
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
}
