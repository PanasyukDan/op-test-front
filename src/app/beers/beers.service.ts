import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Beer} from '../model/beer.model';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {PageBeer} from '../model/pageBeer.model';

@Injectable()
export class BeersService {
  constructor(private http: HttpClient) {
  }

  findBeers(filter, sortOrder, pageNumber, pageSize): Observable<PageBeer> {
    return this.http.get<PageBeer>(`${environment.SERVER_API_URL}/beers`, {
      params: new HttpParams()
        .set('filter', filter)
        .set('sort', sortOrder)
        .set('page', pageNumber.toString())
        .set('size', pageSize.toString())
    });
  }

  markFavorite(beerId): Observable<any> {
    return this.http.post<Beer>(`${environment.SERVER_API_URL}/beers/favorite-beer/${beerId}`, null);
  }
}
