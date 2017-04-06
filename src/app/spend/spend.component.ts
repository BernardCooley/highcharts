import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { DisplayDashboardService } from './../../services/showDashboard.service';

@Component({
  selector: 'app-spend',
  templateUrl: './spend.component.html',
  styleUrls: ['./spend.component.css']
})
export class SpendWidgetComponent implements OnInit {
	@Input() textDisplay: String;
	@Input() spendTitle: String;
	@Input() year1: String;
	@Input() year2: String;
	options: Object;
	jsonData: any;
	title: String;
	missedOpportunitiesTitle: any;

	constructor(displayDashboardService: DisplayDashboardService, elm: ElementRef) {
		this.jsonData = this.getCurrentDashboardJson(displayDashboardService);
		this.options = this.jsonData.widgets.spendGauge.chartConfig;
		// this.textDisplay = elm.nativeElement.getAttribute('textDisplay');
		// this.spendTitle = elm.nativeElement.getAttribute('spendTitle');
	}

	getCurrentDashboardJson(displayDashboardService: DisplayDashboardService) {
		return displayDashboardService.sendCurrentDashboardJson();
	}

	ngOnInit() {
	}

}
