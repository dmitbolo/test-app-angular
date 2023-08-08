import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DiaryEntriesComponent} from "./components/diary-entries/diary-entries.component";
import {EntriesAddComponent} from "./components/entries-add/entriesadd.component";
import {EntriesEditComponent} from "./components/entries-edit/entries-edit.component";

const routes: Routes = [{
  path: '', component: DiaryEntriesComponent
},
  {
    path: "add", component: EntriesAddComponent
  },
  {
    path: "edit/:id", component: EntriesEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
