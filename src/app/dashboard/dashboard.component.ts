import { Component, Input, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ProductService } from '../products/service/product.service';
import { Subscription } from 'rxjs';
import { Product } from '../shared/model/data';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { CartService } from '../shared/service/cart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit, OnDestroy {

  config = {
    page: 0,
    totalCount: 0,
    products: []
  };
  filter: string;
  loading: boolean = false;
  subs: Subscription[] = [];
  products: Product[] = [];
  cartProduct = [];

  @ViewChild(InfiniteScrollDirective, { static: false }) infiniteScroll: InfiniteScrollDirective;

  constructor(
    private service: ProductService,
    private cartService: CartService
  ) {
    this.getProducts();
  }

  ngOnInit() {
    this.subs.push(
      this.cartService.cartItems.subscribe(
        val => {
          if (val) {
            this.cartProduct = val;
            this.products = this.service.formateProduct(this.config.products, val);
            // console.log(this.config.products)
          }
        }
      )
    );
  }

  ngOnDestroy() {
    this.subs.forEach(f => f.unsubscribe());
  }

  private getProducts() {
    this.loading = true;
    this.service.getProducts(this.config, this.filter || '').subscribe(
      res => {
        this.loading = false;
        this.config.totalCount = res.totalCount;
        this.config.products = [...this.config.products, ...res.products];
        this.products = this.service.formateProduct(this.config.products, this.cartService.cartItmesValue);
      },
      err => this.config.page -= 1
    );
  }

  onScroll() {
    // console.log(this.config.page)
    if ((this.config.page * 12) < this.config.totalCount) {
      this.config.page += 1;
      this.getProducts();
    }

    // this.infiniteScroll.ngOnDestroy();
    // this.infiniteScroll.setup();
  }

}



// export class DashboardComponent implements OnInit {
//   // @Input('productZ') productZ: Product;
//   loading = false;
//   products: Product[] = [];
//   // @Input('products') products: Product[] = [];
//   productsX: any = [];
//   data: any;
//   // @Input('product') product: Product;
//   @ViewChild(InfiniteScrollDirective, { static: false }) infiniteScroll: InfiniteScrollDirective;

//   constructor(
//     private service: DashboardService
//   ) { }

//   ngOnInit() {
//     const x = "product/all/";
//     this.service.sendGetRequest(x).subscribe((data: any) => {
//       console.log("hi i am object" + data);
//       console.log(data[0]);
//       this.products = data.data;
//       // data => this.prices = data.ticker
//       // this.productsX = data.data;
//       console.log(this.products);
//     });

//     // this.service.getHeroes (x) {

//     // }

//   }
//   // @Input() products: Product[];

// }