import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NewsarabapiService } from 'src/app/services/newsarabapi.service';

@Component({
  selector: 'app-news-arab',
  templateUrl: './news-arab.component.html',
  styleUrls: ['./news-arab.component.scss'],
})
export class NewsArabComponent implements OnInit {
  arabData: any = [];
  img = { 'border-radius': '15px' };
  constructor(
    private arabService: NewsarabapiService,
    private titleService: Title
  ) {
    this.titleService.setTitle('welcome to arabic news');
  }

  ngOnInit(): void {
    this.arabService.newsArab().subscribe((res) => {
      // console.log('arab', res);
      this.arabData = res.articles;
    });
  }
}
