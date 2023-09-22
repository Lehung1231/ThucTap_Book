import { Component ,OnInit} from '@angular/core';
import { Iproduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent {
  products!: Iproduct[];
  newProducts!: Iproduct[];
  featuredProducts!: Iproduct[];
  
  
  responsiveOptions!: any[];

  constructor(private productService: ProductService) {}
  ngOnInit() { 
    this.productService.getProducts().subscribe((products: any) => {
      this.products = products.product.docs;
      console.log(this.products);
      
      this.featuredProducts = this.products.filter(
        (product) => product.featured && product.isVisible
      );
      this.newProducts = this.products.filter(
        (product) => product.isNew && product.isVisible
      );
    });
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

}