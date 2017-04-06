import { Component, OnInit } from '@angular/core';
import { jsonData } from 'data/jsonData';
import { DisplayDashboardService } from './../../services/showDashboard.service';

@Component({
  selector: 'app-compliance',
  templateUrl: './compliance.component.html',
  styleUrls: ['./compliance.component.css']
})
export class ComplianceComponent implements OnInit {
	jsonData: any;
	panel2Widget1: String;
	panel2Widget2: String;

	constructor(displayDashboardService: DisplayDashboardService) {
		this.jsonData = this.getCurrentDashboardJson(displayDashboardService);
		this.panel2Widget1 = this.getPanel2Widget1();
		this.panel2Widget2 = this.getPanel2Widget2();
	}

	getPanel2Widget1() {
		return this.jsonData.bootstrapGrid.panels.layout.widgets.panel2Widget1;
	}
	
	getPanel2Widget2() {
		return this.jsonData.bootstrapGrid.panels.layout.widgets.panel2Widget2;
	}

	getCurrentDashboardJson(displayDashboardService: DisplayDashboardService) {
		return displayDashboardService.sendCurrentDashboardJson();
	}

	ngOnInit() {
	}

}
