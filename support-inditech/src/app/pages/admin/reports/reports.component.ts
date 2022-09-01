import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { ComplaintsService } from '../../services/complaints.service';
import { DashboardsService } from '../../services/dashboards.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  dashboardDataList: any;
  complaintsDetailsData: any;
  allAvailableTechnician: any
  pendingCallFromThreeDays = 0;
  pendingCallFromOneWeek = 0;
  pendingCallFromTwoWeek = 0;
  pendingCallFromThreeWeek = 0;
  pendingCallFromMonth = 0;

  constructor(private dashboardData: DashboardsService, private complaintsData: ComplaintsService) {
    this.getComplaintsDetails();
  }
  public complaintDetails = {
    complaintId: 1
  };

  ngOnInit(): void {



  }

  getComplaintsDetails() {

    this.dashboardData.getDashboardData().subscribe(
      (data: any) => {
        this.dashboardDataList = data.response;
        //   this.complaintsDetailsData=Array.of(this.complaintsDetailsData);
        //  console.log(data.response);
        //  console.log(this.dashboardDataList);
        var myChart = new Chart("myChart", {
          type: 'bar',
          data: {
            labels: ['Pending Calls', 'Assigned Phone Calls', 'Unresolved Calls', 'Pending For Visit', 'Assigned For Visit', 'In-Progress for Visit', 'Resolved Calls'],
            datasets: [{
              label: 'Calls',
              data: [this.dashboardDataList.countForPendingCalls, this.dashboardDataList.countForAssignedTeleCalls, this.dashboardDataList.countForUnresolvedCalls, this.dashboardDataList.countForPendingForVisitCalls, this.dashboardDataList.countForAssignedSiteVisit, this.dashboardDataList.countForInProgressVisitCalls, this.dashboardDataList.countForResolvedCalls],
              backgroundColor: [
                'rgba(255, 99, 132,0.6)',
                'rgba(255, 159, 64,0.6)',
                'rgba(255, 205, 86,0.6)',
                'rgba(75, 192, 192,0.6)',
                'rgba(54, 162, 235,0.6)',
                'rgba(153, 102, 255,0.6)',
                'rgba(201, 203, 207,0.6)',],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
              ],
              borderWidth: 1
            }]
          },

        });

      },
      (error: any) => {
        console.log(error);
      }

    )


    this.complaintsData.getComplaintsData(this.complaintDetails).subscribe(
      (data: any) => {
        this.complaintsDetailsData = data.response;
        // console.log("complaint data");
        // console.log(this.complaintsDetailsData);
        for (let complaintDataForReport of this.complaintsDetailsData) {
          //  console.log(complaintDataForReport.callRegisteredDate);
          if (complaintDataForReport.status != "Resolved") {
            var date1 = new Date(complaintDataForReport.callRegisteredDate);
            let currentDate = new Date();
            var time = currentDate.getTime() - date1.getTime();
            var days = time / (1000 * 3600 * 24);
            // console.log(Math.floor(days));
            if (Math.floor(days) == 3 || Math.floor(days) < 7) {
              this.pendingCallFromThreeDays++;

            } else if (Math.floor(days) == 7 || Math.floor(days) < 14) {
              this.pendingCallFromOneWeek++;
            } else if (Math.floor(days) == 14 || Math.floor(days) < 21) {
              this.pendingCallFromTwoWeek;
            } else if (Math.floor(days) == 21 || Math.floor(days) < 28) {
              this.pendingCallFromThreeWeek++;
            } else if (Math.floor(days) >= 28) {
              this.pendingCallFromMonth++;
            }
            // console.log(currentDate);
          }
        }
        var myChart1 = new Chart("myChart1", {
          type: 'doughnut',
          data: {
            labels: ['Pending Calls From Three Days', 'Pending Calls From One Week', 'Pending Calls From Two Weeks', 'Pending Calls From Three Weeks', 'Pending Calls From More Than Three Weeks'],
            datasets: [{
              label: 'Calls',
              data: [this.pendingCallFromThreeDays, this.pendingCallFromOneWeek, this.pendingCallFromTwoWeek, this.pendingCallFromThreeWeek, this.pendingCallFromMonth],
              backgroundColor: [
                'rgba(255, 99, 132,0.6)',
                'rgba(255, 159, 64,0.6)',
                'rgba(255, 205, 86,0.6)',
                'rgba(75, 192, 192,0.6)',
                'rgba(54, 162, 235,0.6)',
                'rgba(153, 102, 255,0.6)',
                'rgba(201, 203, 207,0.6)',],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
              ],
              borderWidth: 1
            }]
          },

        });

      },
      (error: any) => {
        console.log(error);
      }

    )




    this.complaintsData.getTechnicianList().subscribe(
      (data: any) => {
        this.allAvailableTechnician = data.response;
        // console.log(this.allAvailableTechnician);

      },
      (error) => {
        console.log(error);
      }

    )


  }

}
