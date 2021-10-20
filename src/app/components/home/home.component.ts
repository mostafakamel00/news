import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  headlineData: any = [];
  img = { 'border-radius': '15px' };
  constructor(private newsService: NewsapiService, private title: Title) {
    this.title.setTitle('welcome to european news');
  }

  ngOnInit(): void {
    this.newsService.headlineNews('business').subscribe((res) => {
      // console.log(res);
      this.headlineData = res.articles;
    });
  }
}
