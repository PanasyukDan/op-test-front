import {Component, OnInit} from '@angular/core';
import {Beer} from '../model/beer.model';
import {BeersService} from '../beers/beers.service';
import {UserService} from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  beers: Beer[] = [];
  isLoading = true;

  constructor(private beersService: BeersService, private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('userId')).subscribe(
      user => {
        this.isLoading = false;
        this.beers = user.beers;
        this.beers.forEach((element, index) => {
          element.isFavorite = true;
      });
    });
  }
}
