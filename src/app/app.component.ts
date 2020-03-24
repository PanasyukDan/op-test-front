import {Component, OnInit} from '@angular/core';
import * as uuid from 'uuid';
import {UserService} from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Punk API';
  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    const id = uuid.v4();
    if (localStorage.getItem('userId') == null) {
      localStorage.setItem('userId', id);
      this.userService.saveUser(id).subscribe(user => {
        console.log(user);
      });
    }
  }
}
