import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserComponent} from './user.component';
import {BeerCardComponent} from '../beer-card/beer-card.component';
import {MaterialModule} from '../core/material.module';
import {RouterTestingModule} from '@angular/router/testing';
import {UserService} from './user.service';
import {BeersService} from '../beers/beers.service';
import {Observable} from 'rxjs';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  const userService = new UserService(null);

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('BeerService', ['findBeers', 'markFavorite']);
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        NoopAnimationsModule
      ],
      declarations: [UserComponent, BeerCardComponent],
      providers: [{provide: BeersService, useValue: spy}, {provide: UserService, useValue: userService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    spyOn(userService, 'getUser').and.returnValue(new Observable());
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
