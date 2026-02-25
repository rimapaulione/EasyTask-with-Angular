import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../task/task.model';

@Component({
  selector: 'app-modal',
  imports: [FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Output() cancelModal = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTask>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel() {
    this.cancelModal.emit();
  }
  onSubmit() {
    const inputDate = new Date(this.enteredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (inputDate >= today && this.enteredTitle !== '') {
      this.add.emit({
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      });
    } else alert('Check date or enter title!');
  }
}
