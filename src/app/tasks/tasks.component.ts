import { Component, Input } from '@angular/core';

import { DUMMY_TASKS } from '../dummy-tasks';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  //@Input() name: string | undefined;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;

  tasks = DUMMY_TASKS;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }


}
