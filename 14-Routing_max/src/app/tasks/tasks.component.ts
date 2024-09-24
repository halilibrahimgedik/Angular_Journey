import {Component, computed, inject, input, signal} from '@angular/core';

import {TaskComponent} from './task/task.component';
import {TasksService} from "./tasks.service";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent {
  private router = inject(Router)
  userId = input.required<string>(); // UserTasksComponent (parent component child component'e) gelen data
  // query parametrelerini de app.config.ts'de ki  withComponentInputBinding() sayesinde yakalayabiliriz.
  // (route'dan veri almak için input binding ile, aynı mekanizma sayesinde query parametrelerini alabilriz)

  order = input<"asc" | "desc">();

  private tasksService = inject(TasksService)
  userTasks = computed(() => this.tasksService.allTasks()
    .filter(task => task.userId === this.userId())
    .sort((a, b) => {
      const aTime = new Date(a.dueDate).getTime();
      const bTime = new Date(b.dueDate).getTime();

      return this.order() === "desc" ? bTime - aTime : aTime - bTime;
    })
  );

  onSortOrderChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const newOrder = selectElement.value as "asc" | "desc";

    this.router.navigate(['/users', this.userId(), 'tasks'], {
      queryParams: {order: newOrder}, // Yeni order değerini ayarla
      queryParamsHandling: 'merge', // Diğer query parametrelerini koru, sadece 'order' parametresini güncelle
    });

  }
}
