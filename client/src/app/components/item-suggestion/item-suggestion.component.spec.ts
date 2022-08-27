import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSuggestionComponent } from './item-suggestion.component';

describe('ItemSuggestionComponent', () => {
  let component: ItemSuggestionComponent;
  let fixture: ComponentFixture<ItemSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSuggestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
