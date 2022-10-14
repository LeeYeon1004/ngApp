import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { items } from '../../config-api/table.config';
import { ItemsTable } from '../../model/table.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnChanges {
  constructor() {}

  items: ItemsTable[] = items;
  newItems: ItemsTable[] = items;
  idItem: number | undefined;

  handleRemove($event: number) {
    // this.newItems = this.newItems.filter((item) => item.id !== $event);
    this.idItem = $event;
  }

  isShowModal: boolean = false;
  isHidden: boolean = false;
  checkShowed($event: boolean) {
    this.isShowModal = $event;
  }
  checkHidden($event: boolean) {
    this.isHidden = $event;
  }
  isShowConfirm: boolean = false;
  isHiddenConfirm: boolean = false;
  checkConfirm($event: boolean) {
    this.isShowConfirm = $event;
  }
  checkHiddenConfirm($event: boolean) {
    this.isHiddenConfirm = $event;
  }
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {}
}
