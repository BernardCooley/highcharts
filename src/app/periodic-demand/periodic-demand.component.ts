import { Component, OnInit } from '@angular/core';
import { DisplayDashboardService } from './../../services/showDashboard.service';

@Component({
  selector: 'app-periodic-demand',
  templateUrl: './periodic-demand.component.html',
  styleUrls: ['./periodic-demand.component.css']
})
export class PeriodicDemandComponent implements OnInit {
	panel4Widget2: String;
	jsonData: any;

	constructor(displayDashboardService: DisplayDashboardService) {
		this.jsonData = this.getCurrentDashboardJson(displayDashboardService);
		this.panel4Widget2 = this.getPanel4Widget2();
	}
	
	getPanel4Widget2() {
		return this.jsonData.bootstrapGrid.panels.layout.widgets.panel4Widget2;
	}

	getCurrentDashboardJson(displayDashboardService: DisplayDashboardService) {
		return displayDashboardService.sendCurrentDashboardJson();
	}

	ngOnInit() {
	}

}
