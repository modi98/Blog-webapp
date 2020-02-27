import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Output() categorySelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  selectCategory(category: string) {
    this.categorySelected.emit(category);
  }
}
