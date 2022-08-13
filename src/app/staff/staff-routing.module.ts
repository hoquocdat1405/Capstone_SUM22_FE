import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffDashboardComponent } from '../staff/staff-page/staff-dashboard/staff-dashboard.component';
import { StaffPageComponent } from '../staff/staff-page/staff-page.component';
// import { StaffCampaignComponent } from './staff-page/staff-campaign/staff-campaign.component';
// import { StaffSchoolComponent } from './staff-page/staff-school/staff-school.component';

const routes: Routes = [
  {
    path: '',
    component: StaffPageComponent,
    children: [
      { path: 'dashboard', component: StaffDashboardComponent },
      // { path: 'school', component: StaffSchoolComponent },
      // { path: 'campaign', component: StaffCampaignComponent },
      // { path: 'news', component: StaffDashboardComponent },
      // { path: 'application', component: StaffDashboardComponent },
    ],
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class StaffRoutingModule {}
