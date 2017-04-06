import { Component, OnInit } from '@angular/core';
import { jsonData } from 'data/jsonData';
import { DisplayDashboardService } from './../../services/showDashboard.service';

@Component({
	selector: 'app-compliance-graph',
	templateUrl: './compliance-graph.component.html',
	styleUrls: ['./compliance-graph.component.css']
})
export class ComplianceGraphComponent implements OnInit {
	options: Object;
	jsonData: any;

	constructor(displayDashboardService: DisplayDashboardService) {
		this.jsonData = this.getCurrentDashboardJson(displayDashboardService);
		this.options = this.jsonData.widgets.complianceGraph.chartConfig;
	}

	getCurrentDashboardJson(displayDashboardService: DisplayDashboardService) {
		return displayDashboardService.sendCurrentDashboardJson();
	}

	ngOnInit() {
	}

}
