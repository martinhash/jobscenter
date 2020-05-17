import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }

  getUsaWorks() {
    const httpOptions = {
      headers: {
        Host: 'data.usajobs.gov',
        'Authorization-Key': 'K5dHFuCOfAdZLcLjTBlvjYvFhMKkHjYbHim+Boo+0wk=',
        'User-Agent': 'martinjoostw@gmail.com'
      }
    };
    return this.http.get(`https://data.usajobs.gov/api/search`, httpOptions);
  }


  getTheMuse() {
    return this.http.get(`https://www.themuse.com/api/public/jobs?page=5`);
  }

  getJuju() {
    return this.http.get(`http://api.juju.com/jobs`);
  }

  getAdzuna() {
    const httpOptions = {
      headers: {
        'Accept': 'application/json',
      }
    };
    return this.http.get(`https://api.adzuna.com/v1/api/jobs/gb/search/10?app_id=f67c13ae&app_key=2b6b1ffb6fdacd0748081fdbc95b91b4`, httpOptions);
  }


}
