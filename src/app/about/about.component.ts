import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { ServiceHttpService } from '../Services/service-http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public age;
  constructor(
    private common: CommonService,
    private serveHttp: ServiceHttpService
  ) {
    this.age = common.age;
  }

  ngOnInit(): void {
    this.serveHttp.getProfile().subscribe((data) => {
      console.log(data);
      this.age = data?.age;
    });
  }
}
