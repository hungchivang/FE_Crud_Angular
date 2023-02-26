import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from "../../service/product-service.service";
import {Product} from "../../model/product";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private http: HttpClient,private productP: ProductServiceService, private route: ActivatedRoute, private router: Router) {
  }

  products: Product[] = [];
  ngOnInit() {
  }

  formCreate: FormGroup = new FormGroup<any>({
    id: new FormControl(""),
    name: new FormControl(""),
    price: new FormControl(""),
    image: new FormControl(""),
  })

  createProduct() {
    this.productP.create(this.formCreate.value).subscribe(data =>{this.products = data});
    this.productP.findAll().subscribe(data => {this.products = data},error => {alert("loi")});
    this.router.navigate(['/show']);
  }
}
