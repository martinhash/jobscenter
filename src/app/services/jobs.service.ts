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

}
