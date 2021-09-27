import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }
  projects=['Project1','Project2','Project3'];
  getData()
  {
    return this.projects;
  }
}
