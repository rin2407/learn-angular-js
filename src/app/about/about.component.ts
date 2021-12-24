import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { ServiceHttpService } from '../Services/service-http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public age = 0;
  public name = '';
  public counter = 5;
  constructor(
    private common: CommonService,
    private serveHttp: ServiceHttpService
  ) {
    this.age = common.age;
  }
  public increment() {
    this.counter++;
  }
  ngOnInit(): void {
    this.serveHttp.getProfile().subscribe((data) => {
      this.age = data?.age;
      this.name = data?.name;
    });
    this.serveHttp.getCommment().subscribe((data) => {
      console.log(data);
    });
  }
}
