import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComplaintsService } from '../../services/complaints.service';

@Component({
  selector: 'app-pendingcallsfromone',
  templateUrl: './pendingcallsfromone.component.html',
  styleUrls: ['./pendingcallsfromone.component.scss']
})
export class PendingcallsfromoneComponent implements OnInit {

  complaintsDetailsData: any;
  statusCheck = "Pending";
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
    this.complaintsData.getPendingCallsFromOne().subscribe(
      (data: any) => {
        this.complaintsDetailsData = data.response;

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


          },
          (error) => {
            console.log(error);
          }

        )

        //  console.log(this.complaintsDetailsData);
        for (let entry of data.response) {

          this.PendingCount++;
          // console.log(this.PendingCount);

        }




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
