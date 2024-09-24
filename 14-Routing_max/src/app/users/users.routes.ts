import {Routes} from "@angular/router";
import {TasksComponent} from "../tasks/tasks.component";
import {NewTaskComponent} from "../tasks/new-task/new-task.component";

export const routes: Routes = [
    {
      path: '',
      redirectTo: 'tasks',
      pathMatch: 'prefix'
    },
    {
      path: 'tasks',              // .../users/<uid>/tasks
      component: TasksComponent
    },
    {
      path: 'tasks/new',
      component: NewTaskComponent
    }
]
