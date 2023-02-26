import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductServiceService} from "../../service/product-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../model/product";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  index: any;
  formEdit !: FormGroup;

  products: Product[] = [];

  newProduct: Product | undefined;
  constructor(private productP: ProductServiceService,private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
    this.index =this.route.snapshot.paramMap.get("id");
    if(this.index != null){
      this.productP.findById(this.index).subscribe(data => {this.newProduct = data;
        console.log(this.newProduct)
        this.formEdit= new FormGroup({
          id : new FormControl(this.newProduct?.id),
          name : new FormControl(this.newProduct?.name),
          price : new FormControl(this.newProduct?.price),
          image : new FormControl(this.newProduct?.image)
        })
      })

    }

    }

  createEdit(){
    this.index =this.route.snapshot.paramMap.get("id");
    this.productP.findById(this.index).subscribe(data => {this.newProduct = data});
    // this.productP.edit(this.newProduct).subscribe(data => {this.newProduct =data});
    this.productP.findAll().subscribe(data => {this.products = data});
    this.router.navigate(['/show']);
  }


}
