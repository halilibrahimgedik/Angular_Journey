import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomesComponent } from './homes/homes.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path : "placeholders" , loadChildren: () => 
    import('./placeholders/placeholders.module').then(m => m.PlaceholdersModule)
  },
  { path: "tables", loadChildren:() => 
    import('./tables/tables.module').then(m => m.TablesModule)
  },
  {path : "lists", loadChildren:() => 
    import('./lists/lists.module').then(m => m.ListsModule)
  },
  {path : "popups", loadChildren:() => 
    import('./popups/popups.module').then(m => m.PopupsModule)
  },
  { path : '',component : HomesComponent },       // home component gelicek - base url}
  { path : '',component : HomesComponent },       // home component gelicek - base url
  { path : '**', component : NotFoundComponent }, // error component - notfound

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
