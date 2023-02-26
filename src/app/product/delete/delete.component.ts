import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from "../../service/product-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../model/product";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  index: any;
  constructor(private productP: ProductServiceService,private route: ActivatedRoute ,private router: Router) {
  }

  products: Product[] = [];
  ngOnInit() {
    this.index =this.route.snapshot.paramMap.get("id");
    this.productP.delete(this.index).subscribe(data => {this.products = data});
    this.productP.findAll().subscribe(data => {this.products = data},error => {alert("loi")});
    this.router.navigate(['/show']);
  }

}
