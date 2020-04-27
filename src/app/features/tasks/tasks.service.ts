import { Observable } from 'rxjs';
import { BaseHttpService } from './../../core/services/base-http.service';
import { Injectable } from '@angular/core';
import { Task } from './tasks.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private BaseHttp: BaseHttpService) { }

  getTasks(): Observable<Task> {
    return this.BaseHttp.get('tasks');
  }
}
