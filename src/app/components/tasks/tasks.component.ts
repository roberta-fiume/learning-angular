import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';
import { TASKS } from  '../../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
     this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));   //it's like a promise
  }

  deleteTask(task: Task) {    //Task it's a single object, it's not an array so we don't need the brackets
    this.taskService.deleteTask(task).subscribe( () => //deleteTask(task).subscribe(() it's like a .then, is going to delete the task from the server (and is called in task.servive.ts through the observable) and when it's done it's going to delete the task from the UI
      (this.tasks = this.tasks.filter( t => t.id !== task.id)));  //for each task we want that the task.id is not equal to the task.id that we deleted
  }

  toggleReminder(task: Task) {
    console.log("I'm called")
    task.reminder = !task.reminder;
    console.log("task reminder:", task.reminder);
  }

}
