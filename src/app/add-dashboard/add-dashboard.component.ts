import { Component, OnInit } from '@angular/core';
// import { Input } from '@angular/material/input';
import { DashboardCardComponent } from 'app/dashboard-card/dashboard-card.component';
import { DashboardService } from 'services/addDashboard.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-dashboard',
  templateUrl: './add-dashboard.component.html',
  styleUrls: ['./add-dashboard.component.css'],
  inputs: ['title', 'id', 'description', 'json']
})
export class AddDashboardComponent implements OnInit {
	title: string;
	id: string;
	description: string;
	json: string;
	dashboardJsonString: string;
	dashboardJson: JSON;
	dashboardService: DashboardService;
	dashboardCardComponent: DashboardCardComponent;
	private router: Router;

	constructor(dashboardServiceIn: DashboardService, dashboardCardComponentIn: DashboardCardComponent, r: Router) {
		this.router = r;
		this.dashboardService = dashboardServiceIn;
		this.dashboardCardComponent = dashboardCardComponentIn;
	}

	addNewDashboard() {
		this.json = this.json.substring(1);
		this.json = this.json.substring(0, this.json.length - 1);
		this.dashboardJsonString = "{\"title\": ";
		this.dashboardJsonString = this.dashboardJsonString.concat("\""+this.title+"\"");
		this.dashboardJsonString = this.dashboardJsonString.concat(", \"id\": ");
		this.dashboardJsonString = this.dashboardJsonString.concat("\""+this.id+"\"");
		this.dashboardJsonString = this.dashboardJsonString.concat(", \"description\": ");
		this.dashboardJsonString = this.dashboardJsonString.concat("\""+this.description+"\", ");
		this.dashboardJsonString = this.dashboardJsonString.concat(this.json);
		this.dashboardJsonString = this.dashboardJsonString.concat("}");

		this.getNewDashboardJson(JSON.parse(this.dashboardJsonString), this.dashboardService, this.dashboardCardComponent);
		this.redirect();
	}

	getNewDashboardJson(newDashboardJson: JSON, dashboardService: DashboardService, dashboardCardComponent: DashboardCardComponent) {
		dashboardService.getNewDashboardInputSer(newDashboardJson);
		this.dashboardCardComponent.getNewDashboard(dashboardService);
	}

	redirect() {
    	this.router.navigate(['dashboardIndex']);
  	}

	ngOnInit() {
	}

}
