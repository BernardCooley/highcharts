import { Component, OnInit } from '@angular/core';
import { DisplayDashboardService } from './../../services/showDashboard.service';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})

export class IndexPageComponent implements OnInit {
		jsonData: any;

  constructor(displayDashboardService: DisplayDashboardService) {
  	this.jsonData = this.getCurrentDashboardJson(displayDashboardService);
  }

  getCurrentDashboardJson(displayDashboardService: DisplayDashboardService) {
		return displayDashboardService.sendCurrentDashboardJson();
	}

  ngOnInit() {
  }

}
