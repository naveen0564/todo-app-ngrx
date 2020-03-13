import {
  ChangeDetectionStrategy,
  Component,
  Output,
  EventEmitter
} from '@angular/core';
import { TodosService } from '@app/todos/services/todos.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-complete-all',
  styleUrls: ['./complete-all.component.scss'],
  templateUrl: './complete-all.component.html'
})
export class CompleteAllComponent {
  toggle = false;
  constructor(private todosService: TodosService) {}

  toggleCompleteAll(): void {
    this.toggle = !this.toggle;
    this.todosService.toggleAllCompleted(this.toggle);
  }
}
