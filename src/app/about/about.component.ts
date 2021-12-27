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
  public posts: any = [];
  constructor(
    private common: CommonService,
    private serveHttp: ServiceHttpService
  ) {
    this.age = common.age;
  }
  public increment() {
    this.counter++;
  }
  public addPost() {
    const newData = { title: 'testing', author: 'author testing' };
    this.serveHttp.addPosts(newData).subscribe((data) => {
      console.log('addPost', data);
      this.posts.push(data);
      this.common.setTotal(this.posts.length);
    });
  }
  ngOnInit(): void {
    this.serveHttp.getProfile().subscribe((data) => {
      this.age = data?.age;
      this.name = data?.name;
    });
    this.serveHttp.getCommment().subscribe((data) => {
      // console.log(data);
    });
    this.serveHttp.getPosts().subscribe((data) => {
      console.log(data);
      this.posts = data;
    });
  }
}
