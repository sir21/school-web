import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { School } from '../models/school';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  baseUrl = `${environment.api}/school`

  constructor(
    private http: HttpClient
  ) { }

  getSchools(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  addSchool(school: School): Observable<any> {
    return this.http.post(this.baseUrl, school);
  }
}
