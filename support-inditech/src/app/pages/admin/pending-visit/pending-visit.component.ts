import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComplaintsService } from '../../services/complaints.service';

@Component({
  selector: 'app-pending-visit',
  templateUrl: './pending-visit.component.html',
  styleUrls: ['./pending-visit.component.scss']
})
export class PendingVisitComponent implements OnInit {
  complaintsDetailsData: any;
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
          if (entry.status == "Pending for visit") {

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
