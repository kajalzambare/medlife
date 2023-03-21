import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpService } from 'src/app/core/service/http.service';

@Component({
  selector: 'app-top-deals-by-category',
  templateUrl: './top-deals-by-category.component.html',
  styleUrls: ['./top-deals-by-category.component.scss']
})
export class TopDealsByCategoryComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 2
      }
    },
    nav: true
  }
    topDealsByCategory:any=[];

  constructor(private http:HttpService){

  }
  ngOnInit(): void {
    this.getTopDealsByCategory();
  }

  getTopDealsByCategory(){
    this.http.getDataFromServer("top-deals-by-category").subscribe((el:any)=>{
      if(el && el.length >0){
        this.topDealsByCategory=el;
        console.log(this.topDealsByCategory);
      }
    },
    ()=>{
      console.log("error");
    })
  }

}
