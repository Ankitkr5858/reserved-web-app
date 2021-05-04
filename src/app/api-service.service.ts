import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Explore } from './explore';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  url = "https://voxiot.com/news?token=9939919a16f6e777548bfbd8cec327ca"

  constructor(private http: HttpClient) { }


  public getArticles(){
    return this.http.get(this.url)
   }

   public postContent(payload: Explore){
     this.http.post<Explore>(this.url, payload)
   }

}
