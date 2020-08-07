import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../service/commonservice.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  image = '';
  imageurl: string | ArrayBuffer;
  constructor(private service: CommonserviceService, private fb: FormBuilder, private router: Router) {

  }
  signup: FormGroup;
  ngOnInit(): void {
    this.createform();
  }
  data = {
    image: 'assets/p3.jpg',
    name: 'mastan',
    price: 0,
    description: 'awesome'
  }
  adddata() {
    this.service.pusharray(this.data);
  }

  createform() {
    this.signup = this.fb.group({
      name: [null, Validators.compose([Validators.required])],
      price: [null, Validators.compose([Validators.required, Validators.pattern(/^[0-9]*$/)])],
      description: [null, Validators.compose([Validators.required])],
      file: [null, Validators.compose([Validators.required])],
    })
  }

  onSubmit() {
    const data = {
      image: this.imageurl,
      name: this.signup.get('name').value,
      price: this.signup.get('price').value,
      description: this.signup.get('description').value,
    }
    this.service.pusharray(data);
    this.service.newdataadded();
    this.router.navigate(['/show']);

  }
  onchange(event) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      console.log(typeof (reader.result));
      this.imageurl = reader.result;
    })
    reader.readAsDataURL(event.target.files[0]);
  }


}
