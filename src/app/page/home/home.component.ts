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
  valueSearch: string = '';
  clickOut: HTMLDivElement | undefined;

  handleGetId($event: number) {
    this.idItem = $event;
  }
  handleGetData($event: ItemsTable[]) {
    this.newItems = $event;
  }
  handleGetValue($event: string) {
    this.valueSearch = $event;
    this.newItems = this.newItems.filter((item) =>
      item.song.toLowerCase().includes(this.valueSearch.toLowerCase())
    );
  }
  handleGetElementOut($event: HTMLDivElement) {
    this.clickOut = $event;
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
