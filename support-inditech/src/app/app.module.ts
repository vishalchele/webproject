import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CallBookingComponent } from './pages/call-booking/call-booking.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavbarComponent } from './pages/admin/navbar/navbar.component';
import { HomeDashboardComponent } from './pages/admin/home-dashboard/home-dashboard.component';
import { ComplaintComponent } from './pages/admin/complaint/complaint.component';
import { ReportsComponent } from './pages/admin/reports/reports.component';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import { ComplaintFilterPipe } from './pages/pipes/complaint-filter.pipe';
import { PendingCallsComponent } from './pages/admin/pending-calls/pending-calls.component';
import { AssignedPhoneComponent } from './pages/admin/assigned-phone/assigned-phone.component';
import { UnresolvedComponent } from './pages/admin/unresolved/unresolved.component';
import { PendingVisitComponent } from './pages/admin/pending-visit/pending-visit.component';
import { AssignedVisitComponent } from './pages/admin/assigned-visit/assigned-visit.component';
import { InProgessComponent } from './pages/admin/in-progess/in-progess.component';
import { ResolvedComponent } from './pages/admin/resolved/resolved.component';
import { TotalCallsComponent } from './pages/admin/total-calls/total-calls.component';
import { ManageTechnicionsComponent } from './pages/admin/manage-technicions/manage-technicions.component'
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './pages/admin/login/login.component';
import { ComplaintsHistoryComponent } from './pages/admin/complaints-history/complaints-history.component';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChangePasswordComponent } from './pages/admin/change-password/change-password.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PendingcallsfromthreeComponent } from './pages/admin/pendingcallsfromthree/pendingcallsfromthree.component';
import { PendingcallsfromoneComponent } from './pages/admin/pendingcallsfromone/pendingcallsfromone.component';
import { PendingcallsfromtwoComponent } from './pages/admin/pendingcallsfromtwo/pendingcallsfromtwo.component';
import { PendingcallsfromthweekComponent } from './pages/admin/pendingcallsfromthweek/pendingcallsfromthweek.component';
import { PendingcallsfrommonthComponent } from './pages/admin/pendingcallsfrommonth/pendingcallsfrommonth.component';
import { ComplaintPhotosComponent } from './pages/admin/complaint-photos/complaint-photos.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { OwlModule } from 'ngx-owl-carousel';
import { NgxImageZoomModule } from 'ngx-image-zoom';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CallBookingComponent,
    SidebarComponent,
    NavbarComponent,
    HomeDashboardComponent,
    ComplaintComponent,
    ReportsComponent,
    ComplaintFilterPipe,
    PendingCallsComponent,
    AssignedPhoneComponent,
    UnresolvedComponent,
    PendingVisitComponent,
    AssignedVisitComponent,
    InProgessComponent,
    ResolvedComponent,
    TotalCallsComponent,
    ManageTechnicionsComponent,
    LoginComponent,
    ComplaintsHistoryComponent,
    ProfileComponent,
    ChangePasswordComponent,
    PendingcallsfromthreeComponent,
    PendingcallsfromoneComponent,
    PendingcallsfromtwoComponent,
    PendingcallsfromthweekComponent,
    PendingcallsfrommonthComponent,
    ComplaintPhotosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    HttpClientModule,
    MatSelectModule,
    MatSnackBarModule,
    FormsModule,
    NgxPaginationModule,
    CKEditorModule,
    NgxUiLoaderModule,
    NgxChartsModule,
    NgImageSliderModule,
    OwlModule,
    NgxImageZoomModule,
    NgxUiLoaderHttpModule.forRoot({
        showForeground:true,
    }),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
