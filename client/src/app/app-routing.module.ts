import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ItemSuggestionComponent } from './components/item-suggestion/item-suggestion.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ProductsSearchComponent } from './components/products-search/products-search.component';

const routes: Routes = [
  { path: 'cart', component: ItemsListComponent },
  { path: '', component: ProductsSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
