import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable, } from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()
export class HelloService {

  constructor(private http: Http) {

  }

  greet(): Observable<string> {
    return this.http
      .get("/api/hello")
      .map(res => <string>res.text());
  }
}
