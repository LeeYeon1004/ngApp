import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { items } from '../../core/config-api/table.config';
import { ItemsTable } from '../../core/model/table.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnChanges {
  constructor() {}
  newItems: ItemsTable[] = items;
  idItem: number | undefined;
  isShowModal: boolean = false;
  isHidden: boolean = false;
  isShowConfirm: boolean = false;
  isHiddenConfirm: boolean = false;
  clickOut: HTMLDivElement | undefined;
  setEditBtn: boolean = false;
  editItem: ItemsTable | undefined;

  handleGetId($event: number) {
    this.idItem = $event;
    this.editItem = this.newItems[this.idItem - 1];
  }
  handleGetData($event: ItemsTable[]) {
    this.newItems = $event;
  }
  handleGetValue($event: string) {
    // SEARCH
    this.newItems = items.filter((item) =>
      item.song?.toLowerCase().includes($event.toLowerCase())
    );
  }
  // handle outsite
  handleGetElementOut($event: HTMLDivElement) {
    this.clickOut = $event;
  } // -------
  handleAdd($event: ItemsTable) {
    this.newItems = [$event, ...this.newItems];
    console.log($event);
  }
  checkShowed($event: boolean) {
    this.isShowModal = $event;
  }
  checkHidden($event: boolean) {
    this.isHidden = $event;
  }
  checkConfirm($event: boolean) {
    this.isShowConfirm = $event;
  }
  checkHiddenConfirm($event: boolean) {
    this.isHiddenConfirm = $event;
  }
  setEdit($event: boolean) {
    this.setEditBtn = $event;
  }
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {}
}
