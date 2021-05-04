import { Component, OnInit } from '@angular/core';
// import { ApiServiceService } from "../api-service.service";
import { error } from 'selenium-webdriver';
import { ApiServiceService } from '../api-service.service';
import { Explore } from '../explore';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
  providers: []
})

export class ExploreComponent implements OnInit {

  articles!:any[];


  constructor(private api:ApiServiceService) { }

 
  ngOnInit(): void {
    this.api.getArticles().subscribe((data: any) => {
      this.articles = data["data"];
      console.log(this.articles)
    })
  }

}
