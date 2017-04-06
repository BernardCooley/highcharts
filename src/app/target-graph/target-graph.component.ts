import { Component, OnInit } from '@angular/core';
import { DisplayDashboardService } from './../../services/showDashboard.service';

@Component({
  selector: 'app-target-graph',
  templateUrl: './target-graph.component.html',
  styleUrls: ['./target-graph.component.css']
})
export class TargetGraphComponent implements OnInit {
	options: Object;
	jsonData: any;

	constructor(displayDashboardService: DisplayDashboardService) {
		this.jsonData = this.getCurrentDashboardJson(displayDashboardService);
		this.options = this.jsonData.widgets.targetGauge.chartConfig;
	}

	getCurrentDashboardJson(displayDashboardService: DisplayDashboardService) {
		return displayDashboardService.sendCurrentDashboardJson();
	}

	ngOnInit() {
	}

}
