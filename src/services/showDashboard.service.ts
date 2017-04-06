import { Injectable } from '@angular/core';
import { AddDashboardComponent } from '../app/add-dashboard/add-dashboard.component';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DashboardCardComponent } from 'app/dashboard-card/dashboard-card.component';
import { DashboardPageComponent } from "app/dashboard-page/dashboard-page.component";

@Injectable()
export class DisplayDashboardService {
    currentDashboardID: String;
    currentDashboardJson: JSON;

	constructor() {
    }

    getIDInputSer(dashboardID: String) {
        this.currentDashboardID = dashboardID;
        this.getCurrentDashboardIDSer();
    }

    getCurrentDashboardIDSer() {
        // console.log(this.currentDashboardID + " selected");
        return this.currentDashboardID;
    }

    getCurrentDashboardJsonSer(currentDashboardJsonIn: JSON) {
        this.currentDashboardJson = currentDashboardJsonIn;
        // console.log(currentDashboardJsonIn);
    }

    sendCurrentDashboardJson() {
        return this.currentDashboardJson;
    }

}
