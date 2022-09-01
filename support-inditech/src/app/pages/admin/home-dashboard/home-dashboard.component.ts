import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardsService } from '../../services/dashboards.service';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent implements OnInit {

  dashboardDetailsData: any
  pendingAllCountForReport: any
  constructor(private dashboardData: DashboardsService, private route: Router) {
    this.getDashboardDetails();
  }

  ngOnInit(): void {

  }
  public onCardClick(evt: MouseEvent) {
    this.route.navigate(['/admin/pending-calls']);

  }
  public onCardClickAP(evt: MouseEvent) {
    this.route.navigate(['/admin/assigned-phone']);
  }
  public onCardClickUC(evt: MouseEvent) {
    this.route.navigate(['/admin/unresolved']);
  }
  public onCardClickPV(evt: MouseEvent) {
    this.route.navigate(['/admin/pending-visit']);
  }
  public onCardClickAV(evt: MouseEvent) {
    this.route.navigate(['/admin/assigned-visit']);
  }
  public onCardClickIV(evt: MouseEvent) {
    this.route.navigate(['/admin/inprogess']);
  }
  public onCardClickRC(evt: MouseEvent) {
    this.route.navigate(['/admin/resolved']);
  }
  public onCardClickTC(evt: MouseEvent) {
    this.route.navigate(['/admin/total-calls']);
  }

  public onCardClickMT(evt: MouseEvent) {
    this.route.navigate(['/admin/pendingCallsFromThree']);
  }
  public onCardClickMO(evt: MouseEvent) {
    this.route.navigate(['/admin/pendingCallsFromOne']);
  }
  public onCardClickMTW(evt: MouseEvent) {
    this.route.navigate(['/admin/pendingCallsFromTwo']);
  }
  public onCardClickMTHW(evt: MouseEvent) {
    this.route.navigate(['/admin/pendingCallsFromThreeWeek']);
  }
  public onCardClickMTM(evt: MouseEvent) {
    this.route.navigate(['/admin/pendingCallsFromMonth']);
  }
  getDashboardDetails() {
    this.dashboardData.getDashboardData().subscribe(
      (data: any) => {
        this.dashboardDetailsData = data.response;
        //  console.log(data.response);


      },
      (error) => {
        console.log(error);
      }

    )


    this.dashboardData.getPendingAllCounts().subscribe(
      (data: any) => {
        this.pendingAllCountForReport = data.response;
        // console.log(data.response);
      },
      (error: any) => {
        console.log(error);
      }
    )


  }

}
