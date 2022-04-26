import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../Task'
import { TASKS } from '../mock-tasks';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  //property for url
  private apiUrl = `${environment.apiURL}/tasks`
  // private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    // const tasks = of(TASKS); // turn tasks into an observable
    // return tasks;
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task:Task): Observable<Task[]>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task[]>(url); // returns observables

  }

  addTask(task:Task): Observable<Task[]>{

    return this.http.post<Task[]>(this.apiUrl,task);
  }

}
