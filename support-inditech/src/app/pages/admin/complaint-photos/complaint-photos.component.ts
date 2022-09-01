import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintsService } from '../../services/complaints.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-complaint-photos',
  templateUrl: './complaint-photos.component.html',
  styleUrls: ['./complaint-photos.component.scss']
})
export class ComplaintPhotosComponent implements OnInit {

  complaintsDetailsData: any;
  retrievedImage: any;
  retrievedMaterialImage: any;
  MaterialDetailsData: any;
  url: any;
  imageData: any;
  myThumbnail: any;
  myFullresImage: any;


  constructor(private complaintsData: ComplaintsService, private route: Router, private _route: ActivatedRoute, private _sanitizer: DomSanitizer) {
    // console.log(this._route.snapshot.params.complaintId);
    this.complaintIdOfPhoto.complaintId = this._route.snapshot.params.complaintId;
    this.getComplaintsPhotos();
  }
  public complaintIdOfPhoto = {
    complaintId: ''
  };


  ngOnInit(): void {
  }

  getComplaintsPhotos() {
    this.complaintsData.getCompailantPhotosByComplaintId(this.complaintIdOfPhoto).subscribe(
      (data: any) => {
        this.complaintsDetailsData = data.response;
        console.log(this.complaintsDetailsData.listOfComplaintPhotos);
        this.retrievedImage = 'data:image/jpeg;base64,' + this.complaintsDetailsData.listOfComplaintPhotos[0].complaintPhoto;
        this.myThumbnail = this.retrievedImage;
        this.myFullresImage = this.retrievedImage;



      },
      (error: any) => {
        console.log(error);
      }
    )


    this.complaintsData.getMaterialPhotosByComplaintId(this.complaintIdOfPhoto).subscribe(
      (data: any) => {
        this.MaterialDetailsData = data.response;

        this.url = 'data:image/jpeg;base64,' + this.MaterialDetailsData[0].materialPhoto;

        this.retrievedMaterialImage = 'data:image/jpeg;base64,' + this.MaterialDetailsData[0].materialPhoto;
        this.myThumbnail = this.retrievedMaterialImage;
        this.myFullresImage = this.retrievedMaterialImage;





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
  public zoom() {
    this.imageData = document.getElementById('view');
    if (this.imageData.style.width == "500px") {
      this.imageData.style.width = "300px";
      this.imageData.style.height = "300px";

    } else {

      this.imageData.style.width = "500px";
      this.imageData.style.height = "500px";
    }


  }


}
