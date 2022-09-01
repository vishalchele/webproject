import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComplaintsService } from '../../services/complaints.service';

@Component({
  selector: 'app-pendingcallsfromthree',
  templateUrl: './pendingcallsfromthree.component.html',
  styleUrls: ['./pendingcallsfromthree.component.scss']
})
export class PendingcallsfromthreeComponent implements OnInit {

  complaintsDetailsData: any;
  detailsOfComplaints: any;


  complaintIdForCheck: any = [];
  p: number = 1;
  PendingCount = 0;
  constructor(private complaintsData: ComplaintsService, private route: Router) { this.getComplaintsDetails(); }
  public complaintDetails = {
    complaintId: 1
  };


  ngOnInit(): void {
  }
  getComplaintsDetails() {
    this.complaintsData.getPendingCallsFromthree().subscribe(
      (data: any) => {
        this.complaintsDetailsData = data.response;

        // console.log(this.complaintsDetailsData);

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

        for (let entry of data.response) {

          this.PendingCount++;

        }

      },
      (error: any) => {
        console.log(error);
      }

    )
  }
  public onCardClick(complaintId: Number) {
    this.route.navigate(['/admin/history', complaintId]);
  }

  public onComplaintPhoto(complaintId: Number) {
    this.route.navigate(['/admin/complaintPhotos', complaintId]);
  }

}
