import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule, HttpHeaders } from '@angular/common/http';
import { ContentItem } from '../models/ContentItem'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContentService {
  
  apiUrl:string = "https://ign-apis.herokuapp.com";
  contentRequest:string = "/content";
  commentRequest:string = "/comments";
  jsonpContent:string = '?output=json&callback=jsonp support';
  jsonpComments:string = '&callback=jsonp support';

  
  constructor(private http: HttpClient) {}

  getContent(){
    return this.http.jsonp(`${this.apiUrl}${this.contentRequest}${this.jsonpContent}`, 'callback');
  }

  getCommentInfo(contentId:String) {
    return this.http.jsonp(`${this.apiUrl}${this.commentRequest}/?ids=${contentId}${this.jsonpComments}`, 'callback');
  }
}
