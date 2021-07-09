import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();  //onDeleteTask is going to be the type of EventEmitter and also the <Task> interface. We set it equal to a new EventEmitter
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();  
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: any) {
    this.onDeleteTask.emit(task); // Emitting the onDelete event to parent Tasks
  }

  onToggle(task: any) {
    console.log("DOUBLE CLICK!");
    this.onToggleReminder.emit(task); // Emitting the onDelete event to parent Tasks
  }

}
