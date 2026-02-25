import { Component, inject, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { ModalComponent } from './modal/modal.component';
import { type NewTask } from './task/task.model';
import { CardComponent } from '../ui/card/card.component';
import { TasksService } from './tasks.service';

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

  isAddingTask = false;

  private tasksService = inject(TasksService);

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
