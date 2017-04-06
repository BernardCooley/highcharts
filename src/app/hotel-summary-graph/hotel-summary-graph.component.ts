import { Component, OnInit } from '@angular/core';
import { DisplayDashboardService } from './../../services/showDashboard.service';

@Component({
	selector: 'app-hotel-summary-graph',
	templateUrl: './hotel-summary-graph.component.html',
	styleUrls: ['./hotel-summary-graph.component.css']
})
export class HotelSummaryGraphComponent implements OnInit {
	options: Object;
	jsonData: any;

	constructor(displayDashboardService: DisplayDashboardService) {
		this.jsonData = this.getCurrentDashboardJson(displayDashboardService);
		this.options = this.jsonData.widgets.hotelSummaryGraph.chartConfig;
	}

	getCurrentDashboardJson(displayDashboardService: DisplayDashboardService) {
		return displayDashboardService.sendCurrentDashboardJson();
	}

	ngOnInit() {
	}

}
