import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComplaintsService } from '../../services/complaints.service';

@Component({
  selector: 'app-pendingcallsfromtwo',
  templateUrl: './pendingcallsfromtwo.component.html',
  styleUrls: ['./pendingcallsfromtwo.component.scss']
})
export class PendingcallsfromtwoComponent implements OnInit {

  complaintsDetailsData: any;

  p: number = 1;
  PendingCount = 0;
  detailsOfComplaints: any;

  complaintIdForCheck: any = [];
  constructor(private complaintsData: ComplaintsService, private route: Router) { this.getComplaintsDetails(); }
  public complaintDetails = {
    complaintId: 1
  };


  ngOnInit(): void {
  }

  getComplaintsDetails() {
    this.complaintsData.getPendingCallsFromTwo().subscribe(
      (data: any) => {
        this.complaintsDetailsData = data.response;

        //  console.log(this.complaintsDetailsData);


        this.complaintsData.getComplaintsData(this.complaintDetails).subscribe(
          (data: any) => {
            this.detailsOfComplaints = data.response;

            let count = 0;
            for (let complaintCheck of this.complaintsDetailsData) {

              for (let complaintShowDeta of this.detailsOfComplaints) {
                if (complaintShowDeta.complaintId == complaintCheck.complaintId) {
                  this.complaintIdForCheck[count] = complaintShowDeta;
                  count++;

                }
              }
            }
            // console.log(this.complaintIdForCheck);
            // console.log( 'this.detailsOfComplaints');
            //  console.log(this.detailsOfComplaints.complaintId);
            //  console.log(this.complaintsDetailsData);

            // console.log(this.dashboardDetailsData.countForAssignedTeleCalls);
            // console.log(this.dashboardDetailsData.countForInProgressVisitCalls);
            // console.log(this.dashboardDetailsData.countForPendingCalls);
            // console.log(this.dashboardDetailsData.countForPendingForVisitCalls);
            // console.log(this.dashboardDetailsData.countForResolvedCalls);
            // console.log(this.dashboardDetailsData.countForUnresolvedCalls);
            // console.log(this.dashboardDetailsData.totalAssignedCalls);
            // console.log(this.dashboardDetailsData.totalCalls);

          },
          (error) => {
            console.log(error);
          }

        )

        for (let entry of data.response) {
          // if(entry.status=="Pending"){
          this.PendingCount++;
          // console.log(this.PendingCount);
          // }
        }
        // console.log(this.dashboardDetailsData.countForAssignedTeleCalls);
        // console.log(this.dashboardDetailsData.countForInProgressVisitCalls);
        // console.log(this.dashboardDetailsData.countForPendingCalls);
        // console.log(this.dashboardDetailsData.countForPendingForVisitCalls);
        // console.log(this.dashboardDetailsData.countForResolvedCalls);
        // console.log(this.dashboardDetailsData.countForUnresolvedCalls);
        // console.log(this.dashboardDetailsData.totalAssignedCalls);
        // console.log(this.dashboardDetailsData.totalCalls);

      },
      (error: any) => {
        console.log(error);
      }

    )
  }

  public onCardClick(complaintId: Number) {
    // console.log("vishal");
    this.route.navigate(['/admin/history', complaintId]);
  }

  public onComplaintPhoto(complaintId: Number) {
    // this.route.navigate(['/admin/dashboard']);
    this.route.navigate(['/admin/complaintPhotos', complaintId]);
    //  console.log(complaintId);
  }

}
