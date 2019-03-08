import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LeaveComponent } from './components/leave/leave.component';
import { LeaveModalComponent } from './components/leave/leave-modal.component';
import { Routes, RouterModule } from '@angular/router';
import { CalendarService } from '../app/services/calendarService.service';
import { LeaveListComponent } from './components/leave-list/leave-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { NgbPaginationModule, NgbAlertModule, NgbDatepicker, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { LeaveFormComponent } from './components/leave-form/leave-form.component';
// import { NgbdDatepickerPopup } from './datepicker-popup';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'leave', component: LeaveComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavigateComponent,
    DashboardComponent,
    LeaveComponent,
    LeaveListComponent,
    LeaveModalComponent,
    LeaveFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    // FormControl,
    ReactiveFormsModule,
    FormsModule,
    
    // NgbDatepicker,
    // NgbInputDatepicker
  ],
  providers: [CalendarService, LeaveModalComponent],
  bootstrap: [AppComponent],
  entryComponents: [
    LeaveFormComponent
  ]
})
export class AppModule { 


}
