import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ItemSuggestionComponent } from './components/item-suggestion/item-suggestion.component';
import { ItemsListComponent } from './components/items-list/items-list.component';

const routes: Routes = [
  { path: 'cart', component: ItemsListComponent },
  { path: '*', component: ItemSuggestionComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
