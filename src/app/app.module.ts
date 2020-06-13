import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CardComponent } from './shared/modules/card/card.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HttpService } from './shared/service/http.service';
import { ProductDetailsService } from './shared/modules/product-details/details.service';
import { CommonService } from './shared/service/common.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './shared/modules/product-details/product-details.component';
import { MatChipsModule } from '@angular/material/chips';
import { DataTableComponent } from './shared/data-table/data-table.component';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { ProductService } from './products/service/product.service';
import { CartService } from './shared/service/cart.service';
import { ListComponent } from './products/list/list.component';
import { CreateComponent } from './products/create/create.component';




import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material';
import { MyCartComponent } from './my-cart/my-cart.component';
import { CartPanelComponent } from './cart-panel/cart-panel.component';
import { MatListModule, MatTabsModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardComponent,
    ProductDetailsComponent,
    DataTableComponent,
    ListComponent,
    CreateComponent,
    MyCartComponent,
    CartPanelComponent,
    HeaderComponent,
    SidenavListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    HttpClientModule,



    FlexLayoutModule,
    MatChipsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    InfiniteScrollModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule


  ],
  providers: [CartService, MatSnackBar, ProductService, HttpService, CommonService, ProductDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
