import { Injectable } from '@angular/core';
import {Http,Response,Headers, RequestOptions} from '@angular/http'
import { PluralformsModule} from '../pluralforms.module'
import { Employee } from '../models/employee';
// import 'rxjs/Rx';
import { Observable } from 'rxjs';
@Injectable()
export class FormPosterService {

  constructor(private http:Http) { }

  extractData(res:Response){
      let body = res.json();
      return body.fields || { };
  }

  handleError(error:any){
    return Observable.throwError(error);
    
  }
  postEmployeeForm(employee:Employee):Observable<any>{
    console.log("Posting Employees", employee);
    let body = JSON.stringify(employee);
    let headers = new Headers({'Content-type':'application/json'})
    let option = new RequestOptions({'headers':headers});

    return this.http.post('http://localhost:3100/postemployee', body, option)
                          .map(this.extractData)
                          .catch(this.handleError)
  
  
  }
}
