import { Component, OnInit, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import { Product } from '../../shared/model/data';
import { DataTableComponent } from '../../shared/modules/data-table/data-table.component';
import { ProductService } from '../service/product.service';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from '../../shared/service/common.service';
import { CartService } from '../../shared/service/cart.service';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  dataTableConfig = {
    tableConfig: [],
    totalItem: 0,
    pageSize: 5,
    page: 0,
    dataSource: [],
    sortKey: 'createdAt',
    sortOrder: 1
  };
  // filter: string = '';
  filter: any;
  loading: boolean = false;
  dialogRef;
  subs: Subscription[] = [];
  products: Product[] = [];
  searchCtr: FormControl;

  @ViewChild('Description', { static: true }) Description: TemplateRef<any>;
  @ViewChild('CreatedAt', { static: true }) CreatedAt: TemplateRef<any>;
  @ViewChild('Action', { static: true }) Action: TemplateRef<any>;
  @ViewChild('dataTableComponent', { static: true }) dataTableComponent: DataTableComponent<Product>;
  @ViewChild('dialogRef', { static: true }) dialogTemplateRef: TemplateRef<any>;

  constructor(
    private dialog: MatDialog,
    private service: ProductService,
    private commonService: CommonService,
    private cartService: CartService
  ) {
    this.getProducts(this.dataTableConfig);
    this.searchCtr = new FormControl();

  }

  ngOnInit() {

    this.dataTableConfig['tableConfig'] = [
      { column: 'title', title: 'Name', sort: true },
      { column: 'Price', title: 'Price', sort: true },
      { column: 'Quantity', title: 'Quantity', sort: true },
      { column: 'CategoryName', title: 'Category', sort: true },
      { column: 'createdAt', title: 'Created Date', sort: true, template: this.CreatedAt },
      { column: 's', title: '', template: this.Action }
    ];

    this.subs.push(
      this.cartService.cartItems.subscribe(
        val => {
          if (val) {
            this.dataTableConfig.dataSource = this.service.formateProduct(this.products, val);
          }
        }
      )
    );
  }

  ngOnDestroy() {
    this.subs.forEach(f => f.unsubscribe());
  }

  private getProducts(config) {
    this.loading = true;
    this.service.getProducts(config, this.filter).subscribe(
      res => {
        this.loading = false;
        this.products = res.products;
        this.dataTableConfig.dataSource = this.service.formateProduct(this.products, this.cartService.cartItmesValue);
        this.dataTableConfig.totalItem = res.totalCount;
      }
    );
  }


  dataTableEventChange(config) {
    this.getProducts(config);
  }

  openDeleteModal(row) {
    this.dialogRef = this.dialog.open(this.dialogTemplateRef, {
      data: row
    });
  }

  deleteProduct(data) {
    this.service.deleteProduct(data._id).then(
      (res: any) => {
        this.getProducts(this.dataTableConfig);
        this.commonService.openSnackBar(res.message);
        this.dialogRef.close();
      }
    ).catch(
      err => {
        // console.log(err)
        this.commonService.openSnackBar(err.error ? err.error.message : err.message);
      }
    );
  }

  emptyCheck() {
    if (!this.searchCtr.value) {
      this.filter = '';
      const config = { ...this.dataTableConfig, page: 0, pageSize: 10, sortKey: 'CreatedAt', sortOrder: 1 };
      this.getProducts(config);
    }
  }

  clearsearch() {
    this.searchCtr.setValue('');
    this.emptyCheck();
  }

  loadDataTable() {
    if (this.searchCtr.value) {
      // this.filter = `{'title': { $in: ['${this.searchCtr.value}']}}`;
      this.filter = { title: this.searchCtr.value };
      const config = { ...this.dataTableConfig, page: 0, pageSize: 5, sortKey: 'CreatedAt', sortOrder: 1 };
      this.getProducts(config);
    }
  }

  // from material design optional filter
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.products.filter = filterValue.trim().toLowerCase();
  // }

}
