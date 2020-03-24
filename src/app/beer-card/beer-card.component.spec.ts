import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerCardComponent } from './beer-card.component';
import {MaterialModule} from '../core/material.module';
import {BeersService} from '../beers/beers.service';
import {UserService} from '../user/user.service';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('BeerCardComponent', () => {
  let component: BeerCardComponent;
  let fixture: ComponentFixture<BeerCardComponent>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('BeerService', ['findBeers', 'markFavorite']);
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        NoopAnimationsModule
      ],
      declarations: [ BeerCardComponent ],
      providers: [{provide: BeersService, useValue: spy}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
