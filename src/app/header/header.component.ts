import { Component, OnInit } from '@angular/core';
import { DisplayDashboardService } from './../../services/showDashboard.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pageTitle: String;
  id: String;
  private router: Router;
  jsonData: any;

  constructor(displayDashboardService: DisplayDashboardService, r: Router) {
    this.pageTitle = "Dashboard POC";
    this.jsonData = this.getCurrentDashboardJson(displayDashboardService);
    this.router = r;
    // this.getHeaderDetails(displayDashboardService);
  }

  getCurrentDashboardJson(displayDashboardService: DisplayDashboardService) {
    console.log(displayDashboardService.sendCurrentDashboardJson());
		return displayDashboardService.sendCurrentDashboardJson();
	}

  getHeaderDetails(displayDashboardService: DisplayDashboardService) {
    this.jsonData = this.getCurrentDashboardJson(displayDashboardService);
    this.pageTitle = this.jsonData.title;
  }

  redirect() {
    this.router.navigate(['dashboardIndex']);
  }

  ngOnInit() {
  }

}
