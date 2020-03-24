import {Component, Input, OnInit} from '@angular/core';
import {BeersService} from './beers.service';
import {PageEvent} from '@angular/material';
import {Beer} from '../model/beer.model';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {
  @Input()
  length: number;
  @Input()
  pageIndex = 0;
  @Input()
  pageSize = 10;
  @Input()
  pageSizeOptions: number[] = [10, 15, 30, 100];
  filterValue = '';
  beers: Beer[] = [];
  favoriteBeers: Beer[] = [];
  isLoading = true;

  constructor(private beersService: BeersService, private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('userId')).subscribe(user => {
      this.favoriteBeers = user.beers || [];
      this.fetchBeers(this.filterValue, this.pageIndex, this.pageSize);
    });
  }

  filterChanged(target) {
    this.isLoading = true;
    this.filterValue = target.value;
    this.fetchBeers(target.value, 0, this.pageSize);
  }

  public onPageEvent(event?: PageEvent) {
    this.isLoading = true;
    this.fetchBeers(this.filterValue, event.pageIndex, event.pageSize);
  }

  public fetchBeers(filter, pageIndex, pageSize) {
    this.beersService.findBeers(filter, 'name,asc',
      pageIndex, pageSize)
      .subscribe(pageBeers => {
        this.isLoading = false;
        window.scrollTo(0, 0);
        this.beers = pageBeers.content;
        this.beers.forEach((element, index) => {
          if (this.favoriteBeers.some(({id}) => id === element.id)) {
            this.beers[index].isFavorite = true;
          }
        });
        console.log(pageBeers);
        this.pageIndex = pageBeers.number;
        this.pageSize = pageBeers.size;
        this.length = pageBeers.totalElements;
      });
  }


}
