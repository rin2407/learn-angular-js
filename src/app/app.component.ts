import { Component } from '@angular/core';
import { CommonService } from './Services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'learn-angular-js';
  public totalPost = 0;
  constructor(private common: CommonService) {}
  ngOnInit(): void {
    this.common.totalPost$.subscribe((total) => {
      this.totalPost = total;
    });
  }
}
