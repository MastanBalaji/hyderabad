import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  @Output() productid: EventEmitter<any> = new EventEmitter<any>();
  @Output() added: EventEmitter<any> = new EventEmitter<any>();
  products = []
  constructor() {
    this.products = [
      {
        image: 'assets/p1.jpg',
        name: 'light',
        price: 89333,
        description: 'Homesake Antique Ceramic Pot Shaped Base White Table Lamp with Shade, Vintage Night Lamp Shade Side Lamps Light Decoration for Home , Living Room'
      },
      {
        image: 'assets/p2.jpg',
        name: 'ipad',
        price: 5455,
        description: 'iPad 2 introduced a new thinner design, a dual-core Apple A5 processor, and VGA front-facing and 720p rear-facing cameras designed for FaceTimecalling'
      },
      {
        image: 'assets/p3.jpg',
        name: 'phone',
        price: 55565,
        description: 'Redmi is a sub-brand owned by the Chinese electronics company Xiaomi. It was first announced in July 2013 as a budget smartphone line'
      },
      {
        image: 'assets/p4.jpg',
        name: 'laptop',
        price: 56565,
        description: 'Dell is an American multinational computer technology company that develops, sells, repairs, and supports computers services.'
      },
    ]
  }
  setdata() {
    if (this.products && this.products.length) {
      for (let i = 0; i < this.products.length; i++) {
        this.products[i]['id'] = i
      }
    }
    localStorage.setItem(
      'Products', JSON.stringify(this.products)
    );
    this.newdataadded();
  }

  pusharray(data) {
    this.products.push(data);
    this.setdata();
  }

  selectedproduct(data) {
    this.productid.emit(data);
  }

  newdataadded() {
    this.added.emit();
  }

}
