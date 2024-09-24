import {Routes} from "@angular/router";

import {NoTaskComponent} from "./tasks/no-task/no-task.component";
import {UserTasksComponent} from "./users/user-tasks/user-tasks.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import { routes as userRoutes} from "../app/users/users.routes"

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent
    // redirectTo: 'users/u1',
    //pathMatch: 'full'
  },
  {
    path: 'users/:userId',          // http://localhost:4200/users/<uid>
    component: UserTasksComponent,
    children: userRoutes
    // children: [
    //   {
    //     path: '',
    //     redirectTo: 'tasks',
    //     pathMatch: 'prefix'
    //   },
    //   {
    //     path: 'tasks',              // .../users/<uid>/tasks
    //     component: TasksComponent
    //   },
    //   {
    //     path: 'tasks/new',
    //     component: NewTaskComponent
    //   }
    // ]
  },
  {
    //  catch-all rotasıdır => yani belirtilen rotalarla eşleşmeyen tüm URL'leri yakalar.
    // Bu yüzden en son tanımlanmalı. yoksa her rota ile eşleşir.
    path: '**',
    component: NotFoundComponent
  }
]
