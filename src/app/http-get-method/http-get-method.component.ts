import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-http-get-method',
  templateUrl: './http-get-method.component.html',
  styleUrls: ['./http-get-method.component.css']
})
export class HttpGetMethodComponent implements OnInit {
  
  responseArray=[];
  
  constructor( private http:Http ) { }
  
  ngOnInit() {
    return this.http.get('http://services.groupkt.com/country/search?text=un').subscribe(res=>{
       let response = res.json();
       this.responseArray = response.RestResponse.result;
    })
  }

}
