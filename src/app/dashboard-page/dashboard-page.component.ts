import { DashboardService } from 'services/addDashboard.service';
import { element } from 'protractor';
import { DisplayDashboardService } from './../../services/showDashboard.service';
import { DashboardCardComponent } from 'app/dashboard-card/dashboard-card.component';
import { Component, OnInit, Directive, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SpendWidgetComponent } from 'app/spend/spend.component';


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
	dashboardArray: Array<JSON> = [];
	jsonData: any;
	repeat5: Array<number>;
	repeat4: Array<number>;
	repeat3: Array<number>;
	repeat2: Array<number>;
	currentDashboardID: String;
	currentDashboardJson: any;
	private router: Router;
	panel1Widget1: String;
	panel1Widget2: String;
	panel4Widget1: String;
	panel1Repeat: Array<number> = [];
	panel2Repeat: Array<number> = [];
	panel21Repeat: Array<number> = [];
	panel3Repeat: Array<number> = [];
	panel4Repeat: Array<number> = [];
	panel5Repeat: Array<number> = [];
	dashboardTitle: String;
	dashboardID: String;
	

	constructor(displayDashboardService: DisplayDashboardService, dashboardService: DashboardService, r: Router) {
		this.router = r;
		this.getDashboardArray(dashboardService);
		this.dashboardArray = this.dashboardArray;
		this.jsonData = this.displayCorrectDashboard(this.dashboardArray, this.getCurrentDashboardID(displayDashboardService));
		
		this.panel1Repeat = this.getpanel1RepeatArray(this.jsonData.bootstrapGrid.panels.layout.repeat.panel1);
		this.panel2Repeat = this.getpanel2RepeatArray(this.jsonData.bootstrapGrid.panels.layout.repeat.panel2);
		this.panel21Repeat = this.getpanel21RepeatArray(this.jsonData.bootstrapGrid.panels.layout.repeat.panel21);
		this.panel3Repeat = this.getpanel3RepeatArray(this.jsonData.bootstrapGrid.panels.layout.repeat.panel3);
		this.panel4Repeat = this.getpanel4RepeatArray(this.jsonData.bootstrapGrid.panels.layout.repeat.panel4);
		this.panel5Repeat = this.getpanel5RepeatArray(this.jsonData.bootstrapGrid.panels.layout.repeat.panel5);
		this.getCurrentDashboardJson(displayDashboardService);
		this.panel1Widget1 = this.getPanel1Widget1();
		this.panel1Widget2 = this.getPanel1Widget2();
		this.panel4Widget1 = this.getPanel4Widget1();
		this.currentDashboardID = this.getCurrentDashboardID(displayDashboardService);
	}

	getpanel1RepeatArray(repeatNumber: number) {
		for (var i = 0; i < repeatNumber; i++) {
			this.panel1Repeat.push(i);
		}
		return this.panel1Repeat;
	}

	getpanel2RepeatArray(repeatNumber: number) {
		for (var i = 0; i < repeatNumber; i++) {
			this.panel2Repeat.push(i);
		}
		return this.panel2Repeat;
	}

	getpanel21RepeatArray(repeatNumber: number) {
		for (var i = 0; i < repeatNumber; i++) {
			this.panel21Repeat.push(i);
		}
		return this.panel21Repeat;
	}

	getpanel3RepeatArray(repeatNumber: number) {
		for (var i = 0; i < repeatNumber; i++) {
			this.panel3Repeat.push(i);
		}
		return this.panel3Repeat;
	}

	getpanel4RepeatArray(repeatNumber: number) {
		for (var i = 0; i < repeatNumber; i++) {
			this.panel4Repeat.push(i);
		}
		return this.panel4Repeat;
	}

	getpanel5RepeatArray(repeatNumber: number) {
		for (var i = 0; i < repeatNumber; i++) {
			this.panel5Repeat.push(i);
		}
		return this.panel5Repeat;
	}

	getPanel1Widget1() {
		return this.jsonData.bootstrapGrid.panels.layout.widgets.panel1Widget1;
	}
	
	getPanel1Widget2() {
		return this.jsonData.bootstrapGrid.panels.layout.widgets.panel1Widget2;
	}
	
	getPanel4Widget1() {
		return this.jsonData.bootstrapGrid.panels.layout.widgets.panel4Widget1;
	}

	getDashboardArray(dashboardService: DashboardService) {
		this.dashboardArray = dashboardService.getNewDashboardArraySer();
	}

	getCurrentDashboardID(displayDashboardService: DisplayDashboardService) {
		this.currentDashboardID = displayDashboardService.getCurrentDashboardIDSer();
		console.log(this.currentDashboardID + "fbgfdsgvbfsd");
		return this.currentDashboardID;
	}

	displayCorrectDashboard(dashboardArrayIn: Array<JSON>, currentDashboardID: String) {
		dashboardArrayIn.forEach(element => {
			if(element["id"] == currentDashboardID) {
				this.jsonData = element;
			}
			// console.log(element["id"]);
		});
		return this.jsonData;
	}

	getCurrentDashboardJson(displayDashboardService: DisplayDashboardService) {
		displayDashboardService.getCurrentDashboardJsonSer(this.jsonData);
	}

	ngOnInit() {
		
	}

}
