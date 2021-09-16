import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NewsarabapiService } from 'src/app/services/newsarabapi.service';

@Component({
  selector: 'app-soprtar',
  templateUrl: './soprtar.component.html',
  styleUrls: ['./soprtar.component.scss'],
})
export class SoprtarComponent implements OnInit {
  sportEg: any = [];
  img = { 'border-radius': '15px' };

  constructor(private arabService: NewsarabapiService, private title: Title) {
    this.title.setTitle('welcome to egy sport news');
  }

  ngOnInit(): void {
    this.arabService.sportEg().subscribe((res) => {
      // console.log(res);
      this.sportEg = res.articles;
    });
  }
}
