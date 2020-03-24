import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersComponent } from './beers.component';
import {MaterialModule} from '../core/material.module';
import {UserComponent} from '../user/user.component';
import {BeerCardComponent} from '../beer-card/beer-card.component';
import {BeersService} from './beers.service';
import {UserService} from '../user/user.service';
import {Observable} from 'rxjs';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('BeersComponent', () => {
  let component: BeersComponent;
  let fixture: ComponentFixture<BeersComponent>;
  const userService = new UserService(null);
  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('BeerService', ['findBeers', 'markFavorite']);
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        NoopAnimationsModule
      ],
      declarations: [ BeersComponent, BeerCardComponent ],
      providers: [{provide: BeersService, useValue: spy}, {provide: UserService, useValue: userService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    spyOn(userService, 'getUser').and.returnValue(new Observable());
    fixture = TestBed.createComponent(BeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
