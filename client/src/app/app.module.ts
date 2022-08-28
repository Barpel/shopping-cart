import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { ItemSuggestionComponent } from './components/item-suggestion/item-suggestion.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsSearchComponent } from './components/products-search/products-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    SearchInputComponent,
    ItemSuggestionComponent,
    HeaderComponent,
    ProductsSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
