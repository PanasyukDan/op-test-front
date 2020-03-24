import {Component, Input, OnInit} from '@angular/core';
import {Beer} from '../model/beer.model';
import {BeersService} from '../beers/beers.service';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss']
})
export class BeerCardComponent implements OnInit {
  @Input() beers: Beer[];

  constructor(private beersService: BeersService) {
  }

  ngOnInit() {
  }

  public markFavorite(beer: Beer) {
    this.beersService.markFavorite(beer.id)
      .subscribe(() => {
        beer.isFavorite = !beer.isFavorite;
      });
  }
}
