import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpService } from 'src/app/core/service/http.service';

@Component({
  selector: 'app-medicine-home',
  templateUrl: './medicine-home.component.html',
  styleUrls: ['./medicine-home.component.scss']
})
export class MedicineHomeComponent implements OnInit {

  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     },
  //     940: {
  //       items: 2
  //     }
  //   },
  //   nav: true
  // }

  showDefaultPinCode:boolean=true;
  pincode : string = "";
  pincodeDetails:any ;
  displayErrorMessage:boolean=false;
  @ViewChild('closebtn') closebtn!:ElementRef;

  constructor(private http:HttpService){

  }
  ngOnInit(): void {
  }

verifyPincode(){
  const endPoint="pin-code-details?"+"pincode="+this.pincode;
  this.http.getDataFromServer(endPoint).subscribe((el:any)=>{
    if(el && el.length>0){
      this.pincodeDetails=el[0];
      this.displayErrorMessage=false;
      this.showDefaultPinCode=false;
      this.closebtn.nativeElement .click();
    }
    else{
      this.displayErrorMessage=true;
      this.showDefaultPinCode=true;
    }
  },
  ()=>{

  })
}

}
