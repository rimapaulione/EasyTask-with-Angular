import { Component, Input } from '@angular/core';

import { DUMMY_TASKS } from '../dummy-tasks';
import { TaskComponent } from './task/task.component';
import { ModalComponent } from './modal/modal.component';
import { type NewTask } from './task/task.model';
import { CardComponent } from '../ui/card/card.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, ModalComponent, CardComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  //@Input() name: string | undefined;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;

  tasks = DUMMY_TASKS;
  isAddingTask = false;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(task: NewTask) {
    this.tasks.unshift({
      id: new Date().getTime.toString(),
      userId: this.userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.date,
    });

    this.isAddingTask = false;
  }
}
