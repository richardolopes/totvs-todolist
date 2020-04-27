import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../tasks.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {
  public tasks = [
    { id: 1, name: 'Minha primeira task', type: 1 },
    { id: 2, name: 'Minha segunda task', type: 1 },
    { id: 3, name: 'Minha terceira task', type: 2 }
  ];

  constructor(private service: TasksService) { }

  ngOnInit(): void {
    // this.service.getTasks().subscribe(
    //   (success: Task) => {
    //     this.tasks = success;
    //     console.log(success);
    //   }
    // );
  }
}
