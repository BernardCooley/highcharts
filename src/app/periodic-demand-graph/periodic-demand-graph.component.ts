import { Component, OnInit } from '@angular/core';
import { DisplayDashboardService } from './../../services/showDashboard.service';

@Component({
  selector: 'app-periodic-demand-graph',
  templateUrl: './periodic-demand-graph.component.html',
  styleUrls: ['./periodic-demand-graph.component.css']
})
export class PeriodicDemandGraphComponent implements OnInit {
	options: Object;
	jsonData: any;

	constructor(displayDashboardService: DisplayDashboardService) {
		this.jsonData = this.getCurrentDashboardJson(displayDashboardService);
		this.options = this.jsonData.widgets.periodicDemandGraph.chartConfig;
	}

	getCurrentDashboardJson(displayDashboardService: DisplayDashboardService) {
		return displayDashboardService.sendCurrentDashboardJson();
	}

	ngOnInit() {
	}

}
