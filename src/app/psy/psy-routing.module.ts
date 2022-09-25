import { PsyAllQuestionComponent } from './components/psy-all-question/psy-all-question.component';
import { PsySavedQuestionsComponent } from './components/psy-saved-questions/psy-saved-questions.component';
import { PsyPageComponent } from './components/psy-page/psy-page.component';
import { PsyDashboardComponent } from './components/psy-dashboard/psy-dashboard.component';
import { ApplicationModule, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PsyPageComponent,
    children: [
      { path: '', redirectTo: '/psy/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: PsyDashboardComponent },
      { path: 'myQuestion', component: PsySavedQuestionsComponent },
      { path: 'allQuestion', component: PsyAllQuestionComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PsyRoutingModule { }
