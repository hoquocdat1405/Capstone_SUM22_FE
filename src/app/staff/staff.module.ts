import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StaffRoutingModule } from './staff-routing.module';
import { BrowserModule } from '@angular/platform-browser';

// import { StaffSchoolComponent } from './staff-page/staff-school/staff-school.component';
// import { StaffCampaignComponent } from './staff-page/staff-campaign/staff-campaign.component';
import { MatDividerModule } from '@angular/material/divider';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { StaffPageComponent } from './components/staff-page/staff-page.component';
import { CampaignComponent } from './components/campaign/campaign.component';
import { NewsComponent } from './components/news/news.component';
import { PlanComponent } from './components/plan/plan.component';
import { SchoolComponent } from './components/school/school.component';
import { ApplicationComponent } from './components/application/application.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CampaignDetailComponent } from './components/campaign-detail/campaign-detail.component';

@NgModule({
  declarations: [
    DashboardComponent,
    StaffPageComponent,
    CampaignComponent,
    CampaignDetailComponent,
    NewsComponent,
    PlanComponent,
    SchoolComponent,
    ApplicationComponent,
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    FormsModule,
    MatSlideToggleModule,
    MatPaginatorModule,
  ],
})
export class StaffModule {}
