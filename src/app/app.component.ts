import { Component } from '@angular/core';
import { CommonserviceService } from './service/commonservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products=[];
  constructor(private service: CommonserviceService) {
    this.service.setdata();
    this.products = JSON.parse(
      localStorage.getItem('Products')
    );
    this.newdata();
  }
  
  productselect(data) {
    this.service.selectedproduct(data);
  }
  newdata() {
    this.service.added.subscribe(res => {
      this.products = JSON.parse(
        localStorage.getItem('Products')
      );
    })
  }
}
