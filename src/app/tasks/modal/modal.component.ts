import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-modal',
  imports: [FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }
  onSubmit() {
    const inputDate = new Date(this.enteredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (inputDate >= today && this.enteredTitle !== '') {
      this.tasksService.addTask(
        {
          title: this.enteredTitle,
          summary: this.enteredSummary,
          date: this.enteredDate,
        },
        this.userId,
      );
      this.close.emit();
    } else alert('Check date or enter title!');
  }
}
