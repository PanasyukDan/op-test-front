import {Beer} from './beer.model';

export class PageBeer {
  content: Beer[];
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: string;
  numberOfElements: number;
}

