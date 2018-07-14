import { Component, OnInit } from '@angular/core';
import {JobsService} from './jobs.service';
import {Job} from '../job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  providers: [JobsService]
})
export class JobsComponent implements OnInit {

  constructor(private jobsService: JobsService) { }

  jobs:Array<Job>;

  ngOnInit() {
    this.loadJobs();
  }

  loadJobs() {
    this.jobsService.findAllJobs().subscribe(
      (res) => this.jobs = res.body,
      (error) => console.log(error)
    );
  }

}
