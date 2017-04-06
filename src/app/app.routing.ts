import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDashboardComponent } from './add-dashboard/add-dashboard.component';
import { LayoutComponent } from "app/layout/layout.component";
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboardindex' },
    { path: 'dashboard', component:  LayoutComponent },
    { path: 'addDashboard', component: AddDashboardComponent, data : {some_data : 'some value'} },
    { path: 'dashboardIndex', component: DashboardCardComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

export const routingComponents = [LayoutComponent, AddDashboardComponent, DashboardCardComponent]