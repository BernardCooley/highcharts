import { Component, OnInit } from '@angular/core';
import { DisplayDashboardService } from './../../services/showDashboard.service';

@Component({
  selector: 'app-hotel-summary',
  templateUrl: './hotel-summary.component.html',
  styleUrls: ['./hotel-summary.component.css']
})
export class HotelSummaryComponent implements OnInit {
	jsonData: any;
	panel3Widget1: String;

	constructor(displayDashboardService: DisplayDashboardService) {
		this.jsonData = this.jsonData = this.getCurrentDashboardJson(displayDashboardService);
		this.panel3Widget1 = this.getPanel3Widget1();
	}
	
	getPanel3Widget1() {
		return this.jsonData.bootstrapGrid.panels.layout.widgets.panel3Widget1;
	}

	getCurrentDashboardJson(displayDashboardService: DisplayDashboardService) {
		return displayDashboardService.sendCurrentDashboardJson();
	}

	ngOnInit() {
	}

}
