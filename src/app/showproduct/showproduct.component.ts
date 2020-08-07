import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonserviceService } from '../service/commonservice.service';
@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})

export class ShowproductComponent implements OnInit {
  products = [];
  product = {
    image: '',
    name: '',
    price: 0,
    description: ''
  };
  constructor(private router: ActivatedRoute, private service: CommonserviceService, ) {
    this.getproducts();
  }

  ngOnInit(): void {
    this.selectedproduct();
  }

  getproducts() {
    this.products = JSON.parse(
      localStorage.getItem('Products')
    );
      this.product = this.products[0];
  }

  selectedproduct() {
    this.service.productid.subscribe(res => {
      if ((res > -1) && (this.products && this.products.length)) {
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id == res) {
            this.product = this.products[i];
          }
        }
      }
    })
  }

}
