import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from "../../service/product-service.service";
import {Product} from "../../model/product";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductServiceService) {
    this.findAll();
  }

  ngOnInit() {
  }

  findAll(){
    this.productService.findAll().subscribe(data => {
      this.products = data;
    },error => {
      alert("loi")
    })
  }
}
