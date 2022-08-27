import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { throttleTime, distinctUntilChanged, Observable } from 'rxjs';

import { Item } from '../../items';

interface Options {
  headers?: HttpHeaders | { [header: string]: string | string[] },
  observe?: 'body'
  params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean> },
  reportProgress?: boolean,
  responseType?: 'json',
  withCredentials?: boolean,
}

const ITEM_API_URL = 'http://localhost:3100/api/products';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getItems(searchTerm: string | number = '', quantity: number = 30): Observable<any> {
    const queryParam = searchTerm ? `&term=${searchTerm}` : '';

    return this.http.get<Item[]>(`${ITEM_API_URL}?limit=${quantity}${queryParam}`).pipe(throttleTime(3000));
  }
}
