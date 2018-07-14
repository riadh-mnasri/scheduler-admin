import { HttpClient, HttpResponse } from '@angular/common/http';
import { Job } from '../job';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class JobsService {

  private resourceUrl = 'http://localhost:3000/jobs';
  constructor(private http: HttpClient) { }

  findAllJobs(): Observable<HttpResponse<Array<Job>>> {
    return this.http.get<Array<Job>>(
      this.resourceUrl, { observe: 'response' });
  }
}
