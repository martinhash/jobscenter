import { Component } from '@angular/core';
import { JobsService } from './services/jobs.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private jobsService: JobsService) {
    // this.jobsService.getUsaWorks().subscribe( (resp: any) => {
    //   this.usaJobs = resp.SearchResult;
    //   console.log(this.usaJobs.SearchResultItems);
    // });
    // this.jobsService.getTheMuse().subscribe( resp => {
    //   console.log(resp);
    // });
    // this.jobsService.getJuju().subscribe( resp => {
    //   console.log(resp);
    // });
    this.jobsService.getAdzuna().subscribe( resp => {
      console.log(resp);
    });
  }


}
