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
    return this.http.get(`https://data.usajobs.gov/api/search?JobCategoryCode=2210`, httpOptions);
  }

}
