import { Component, OnInit } from '@angular/core';
import { HomeService } from './service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userList;
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.homeService.getUserList('/users').subscribe(
      res => {
        if(res) {
          this.userList = res;
        }
      }
    )
  }

}
