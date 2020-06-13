import { Injectable } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class ProductDetailsService {

  constructor(
    private http: HttpService
  ) { }

  getProducts(id) {
    return this.http.get('product/' + id).pipe(map((res: any) => res.data), catchError(err => of(null)));
  }


}
