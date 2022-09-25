import { BarChartComponent } from './../common-components/bar-chart/bar-chart.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { PsyRoutingModule } from './psy-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PsyDashboardComponent } from './components/psy-dashboard/psy-dashboard.component';
import { PsyPageComponent } from './components/psy-page/psy-page.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PsySavedQuestionsComponent } from './components/psy-saved-questions/psy-saved-questions.component';
import { PsyAllQuestionComponent } from './components/psy-all-question/psy-all-question.component';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [
    PsyDashboardComponent,
    PsyPageComponent,
    PsySavedQuestionsComponent,
    PsyAllQuestionComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule,
    PsyRoutingModule,
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
    MatTabsModule,
    MatExpansionModule,
    MatCheckboxModule
  ]
})
export class PsyModule { }
