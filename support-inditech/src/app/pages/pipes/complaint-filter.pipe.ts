import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'complaintFilter'
})
export class ComplaintFilterPipe implements PipeTransform {
    filterData:any;
    public complaintDetails = {
      complaintId:1
    };
  transform(filterDatas:any,StatusData:string): unknown {
    return null;
  }
  getComplaintsDetails() {
    this.filterData.getComplaintsData(this.complaintDetails).subscribe(
      (data:any)=>{
        this.filterData=data.response;
        //  console.log(data.response);
        //  console.log(this.filterData);


      },
      (error:any)=>{
        console.log(error);
      }

    )
  }

}
