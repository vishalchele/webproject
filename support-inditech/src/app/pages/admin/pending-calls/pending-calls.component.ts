import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComplaintsService } from '../../services/complaints.service';

@Component({
  selector: 'app-pending-calls',
  templateUrl: './pending-calls.component.html',
  styleUrls: ['./pending-calls.component.scss']
})
export class PendingCallsComponent implements OnInit {
  complaintsDetailsData: any;
  statusCheck = "Pending";
  p: number = 1;
  PendingCount = 0;
  constructor(private complaintsData: ComplaintsService, private route: Router) { this.getComplaintsDetails(); }
  public complaintDetails = {
    complaintId: 1
  };
  ngOnInit(): void {
  }
  getComplaintsDetails() {
    this.complaintsData.getComplaintsData(this.complaintDetails).subscribe(
      (data: any) => {
        this.complaintsDetailsData = data.response;

        for (let entry of data.response) {
          if (entry.status == "Pending") {
            this.PendingCount++;

          }
        }


      },
      (error) => {
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
