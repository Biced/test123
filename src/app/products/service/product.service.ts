import { Injectable } from "@angular/core";
import { HttpService } from "../../shared/service/http.service";
import { of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { cloneDeep } from 'loadsh';

@Injectable()
export class ProductService {

  constructor(private http: HttpService) { }

  getProducts(config, filter) {
    const sendData = {
      page: config.page,
      limit: config.pageSize,
      filter,
      sortKey: config.sortKey || "_id",
      sortOrder: config.sortOrder || 1
    };
    return this.http.post('product/all/', sendData).pipe(
      map((res: any) => res.data),
      catchError(e =>
        of({
          // limit: config.pageSize,
          // page: config.page,
          totalCount: config.totalItem,
          products: config.dataSource
        })
      )
    );
  }

  getSingleProduct(id) {
    return this.http.get(`product/${id}`).pipe(
      map((res: any) => res.data)
    );
  }


  saveProduct(id, data) {
    if (id) {
      return this.http.post('product/' + id, data).toPromise();
    } else {
      return this.http.put('product/create', data).toPromise();
    }
  }

  deleteProduct(id) {
    return this.http.delete('product/' + id).toPromise();
  }

  formateProduct(data, cartList) {
    const products = cloneDeep(data);
    return products.map(m => {
      const cart = cartList.find(c => c._id === m._id);
      if (cart) m = { ...m, ...cart };
      m['cartQty'] = m['cartQty'] || 0;
      return m;
    });
  }
}
