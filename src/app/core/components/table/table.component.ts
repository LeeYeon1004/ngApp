import { Component, Input, OnInit } from '@angular/core';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { ItemsTable } from '../../model/table.interface';
import { items } from '../../config-api/table.config';

@Component({
  selector: 'TableComponent',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  faAnglesUp = faAnglesUp;
  items: ItemsTable[] = items;
  currentItem = items[0];

  @Input() item: ItemsTable | undefined;

  handleSelect(i: number) {
    console.log(i);
  }

  constructor() {}

  ngOnInit(): void {}
}
