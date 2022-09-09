import { ApplicationModule, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './components/application/application.component';
import { CampaignDetailComponent } from './components/campaign-detail/campaign-detail.component';
import { CampaignComponent } from './components/campaign/campaign.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MajorsComponent } from './components/majors/majors.component';
import { NewsComponent } from './components/news/news.component';
import { PlanComponent } from './components/plan/plan.component';
import { SchoolComponent } from './components/school/school.component';
import { StaffPageComponent } from './components/staff-page/staff-page.component';

// import { StaffDashboardComponent } from '../staff/staff-page/staff-dashboard/staff-dashboard.component';
// import { StaffCampaignComponent } from './staff-page/staff-campaign/staff-campaign.component';
// import { StaffSchoolComponent } from './staff-page/staff-school/staff-school.component';

const routes: Routes = [
  {
    path: '',
    component: StaffPageComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'school', component: SchoolComponent },
      { path: 'plan', component: PlanComponent },
      { path: 'campaign', component: CampaignComponent },
      { path: 'campaign/:id', component: CampaignDetailComponent },
      { path: 'news', component: NewsComponent },
      { path: 'application', component: ApplicationComponent },
      { path: 'majors', component: MajorsComponent },
    ],
  },
  {
    path: '**',
    redirectTo: '/staff',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModule {}
