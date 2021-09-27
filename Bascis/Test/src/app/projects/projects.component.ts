import { ProjectsService } from './../services/projects.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
projects:any;
  constructor(private ProjectsService:ProjectsService) { }

  ngOnInit(): void {
    this.getMyData();
  }
getMyData():any
{
 this.projects=this.ProjectsService.getData();
}

}
