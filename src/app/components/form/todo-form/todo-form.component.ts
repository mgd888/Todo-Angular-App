import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TaskService } from '../../../services/task.service'
import { Task } from '../../../Task'
@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  tasks: Task[] = []; // store mock data in tasks


  todoForm = this.formBuilder.group({
    id: Math.random().toString(36).substr(2, 9),
    text: '',
    day: '',
    reminder: false,

  })
  todoName: string;
  constructor(private taskService: TaskService, private formBuilder: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
  
  onSubmit(): void {
    // console.log({{this.todoForm.value.day | date:'medium'}})
    this.taskService
      .addTask(this.todoForm.value).subscribe(task => console.log("tasks", this.tasks))
      
  }
}
