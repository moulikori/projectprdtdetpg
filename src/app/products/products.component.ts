import { Component, OnInit } from '@angular/core';
import { ProductdetialsService } from '../service/productdetails.service';
import { Product } from './product.model';


@Component({
  selector: 'app-product-list',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products : Array<Product>=[];

  constructor(private product: ProductdetialsService) {}


  ngOnInit(): void {
    this.product.getProducts().subscribe((data: any[]) => {
      
      this.products = (data as any).products;   
     
    });
  }

  
}