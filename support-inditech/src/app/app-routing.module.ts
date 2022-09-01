import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignedPhoneComponent } from './pages/admin/assigned-phone/assigned-phone.component';
import { AssignedVisitComponent } from './pages/admin/assigned-visit/assigned-visit.component';
import { ChangePasswordComponent } from './pages/admin/change-password/change-password.component';
import { ComplaintPhotosComponent } from './pages/admin/complaint-photos/complaint-photos.component';
import { ComplaintComponent } from './pages/admin/complaint/complaint.component';
import { ComplaintsHistoryComponent } from './pages/admin/complaints-history/complaints-history.component';
import { HomeDashboardComponent } from './pages/admin/home-dashboard/home-dashboard.component';
import { InProgessComponent } from './pages/admin/in-progess/in-progess.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { ManageTechnicionsComponent } from './pages/admin/manage-technicions/manage-technicions.component';
import { PendingCallsComponent } from './pages/admin/pending-calls/pending-calls.component';
import { PendingVisitComponent } from './pages/admin/pending-visit/pending-visit.component';
import { PendingcallsfrommonthComponent } from './pages/admin/pendingcallsfrommonth/pendingcallsfrommonth.component';
import { PendingcallsfromoneComponent } from './pages/admin/pendingcallsfromone/pendingcallsfromone.component';
import { PendingcallsfromthreeComponent } from './pages/admin/pendingcallsfromthree/pendingcallsfromthree.component';
import { PendingcallsfromthweekComponent } from './pages/admin/pendingcallsfromthweek/pendingcallsfromthweek.component';
import { PendingcallsfromtwoComponent } from './pages/admin/pendingcallsfromtwo/pendingcallsfromtwo.component';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import { ReportsComponent } from './pages/admin/reports/reports.component';
import { ResolvedComponent } from './pages/admin/resolved/resolved.component';
import { TotalCallsComponent } from './pages/admin/total-calls/total-calls.component';
import { UnresolvedComponent } from './pages/admin/unresolved/unresolved.component';
import { CallBookingComponent } from './pages/call-booking/call-booking.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminGuard } from './pages/services/admin.guard';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },

  {
    path: 'admin',
    component: DashboardComponent,
    canActivate:[AdminGuard],
    children: [
      {
        path: '',
        component: HomeDashboardComponent,
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: HomeDashboardComponent,
        pathMatch: 'full',
      },
      {
        path: 'complaint',
        component: CallBookingComponent,
        pathMatch: 'full',
      },
      {
        path: 'complaintPhotos/:complaintId',
        component: ComplaintPhotosComponent,
        pathMatch: 'full',
      },
      {
        path: 'tickets',
        component: ComplaintComponent,
        pathMatch: 'full',
      },
      {
        path: 'pending-calls',
        component: PendingCallsComponent,
        pathMatch: 'full',
      },
      {
        path: 'history/:complaintID',
        component: ComplaintsHistoryComponent,
        pathMatch:'full',
      },
      {
        path: 'assigned-phone',
        component: AssignedPhoneComponent,
        pathMatch: 'full',
      },
      {
        path: 'assigned-visit',
        component: AssignedVisitComponent,
        pathMatch: 'full',
      },
      {
        path: 'inprogess',
        component: InProgessComponent,
        pathMatch: 'full',
      },
      {
        path: 'profile',
        component:ProfileComponent,
        },
      {
        path: 'total-calls',
        component: TotalCallsComponent,
        pathMatch: 'full',
      },
      {
        path: 'pending-visit',
        component: PendingVisitComponent,
        pathMatch: 'full',
      },
      {
        path: 'resolved',
        component: ResolvedComponent,
        pathMatch: 'full',
      },
      {
        path: 'unresolved',
        component: UnresolvedComponent,
        pathMatch: 'full',
      },
      {
        path: 'manage-tech',
        component: ManageTechnicionsComponent,
        pathMatch: 'full',
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
        pathMatch: 'full',
      },
      {
        path: 'report',
        component: ReportsComponent,
        pathMatch: 'full',
      },
      {
        path: 'pendingCallsFromThree',
        component: PendingcallsfromthreeComponent,
        pathMatch: 'full',
      },
      {
        path: 'pendingCallsFromOne',
        component: PendingcallsfromoneComponent,
        pathMatch: 'full',
      },
      {
        path: 'pendingCallsFromTwo',
        component: PendingcallsfromtwoComponent,
        pathMatch: 'full',
      },
      {
        path: 'pendingCallsFromThreeWeek',
        component: PendingcallsfromthweekComponent,
        pathMatch: 'full',
      },
      {
        path: 'pendingCallsFromMonth',
        component: PendingcallsfrommonthComponent,
        pathMatch: 'full',
      },


    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
