import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss'],
})
export class TechComponent implements OnInit {
  techData: any = [];
  img = { 'border-radius': '15px' };
  constructor(private newService: NewsapiService, private titleService: Title) {
    this.titleService.setTitle('welcome to technology news');
  }

  ngOnInit(): void {
    this.newService.headlineTech().subscribe((res) => {
      this.techData = res.articles;
    });
  }
}
