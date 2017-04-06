import { DisplayDashboardService } from './../services/showDashboard.service';
import { AppRoutingModule, routingComponents } from './app.routing';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ChartModule } from 'angular2-highcharts/dist';
import { LayoutComponent } from './layout/layout.component';
import 'highcharts/highcharts-more';
import { SpendWidgetComponent } from './spend/spend.component';
import { SpendingSavingComponent } from './spending-saving/spending-saving.component';
import { ComplianceComponent } from './compliance/compliance.component';
import { HotelSummaryComponent } from './hotel-summary/hotel-summary.component';
import { PeriodicDemandComponent } from './periodic-demand/periodic-demand.component';
import { DemandSummaryComponent } from './demand-summary/demand-summary.component';
import { ComplianceGraphComponent } from './compliance-graph/compliance-graph.component';
import { HotelSummaryGraphComponent } from './hotel-summary-graph/hotel-summary-graph.component';
import { PurposeOfTripsComponent } from './purpose-of-trips/purpose-of-trips.component';
import { PeriodicDemandGraphComponent } from './periodic-demand-graph/periodic-demand-graph.component';
import { TargetGraphComponent } from './target-graph/target-graph.component';
import { MaterialModule } from '@angular/material';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { AddDashboardComponent } from './add-dashboard/add-dashboard.component';
import { MdInput } from '@angular2-material/input/input';
import { IndexPageComponent } from './index-page/index-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardService } from 'services/addDashboard.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SpendWidgetComponent,
    SpendingSavingComponent,
    ComplianceComponent,
    HotelSummaryComponent,
    PeriodicDemandComponent,
    DemandSummaryComponent,
    ComplianceGraphComponent,
    HotelSummaryGraphComponent,
    PurposeOfTripsComponent,
    PeriodicDemandGraphComponent,
    TargetGraphComponent,
    DashboardCardComponent,
    AddDashboardComponent,
    MdInput,
    IndexPageComponent,
    DashboardPageComponent,
    routingComponents,
    HeaderComponent,
  ],
  imports: [
    AppRoutingModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartModule.forRoot(
        require('highcharts/highstock'),
        require('highcharts/modules/exporting'),
        require('highcharts/highcharts-more'),
        require('highcharts/js/modules/solid-gauge')
    )
  ],
  providers: [DashboardService, AddDashboardComponent, DisplayDashboardService, DashboardCardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
