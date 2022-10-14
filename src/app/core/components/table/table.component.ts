import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { ItemsTable } from '../../model/table.interface';

@Component({
  selector: 'TableComponent',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  faAnglesUp = faAnglesUp;
  @Input() newItems: ItemsTable[] | undefined;

  @Input() isShowConfirm: boolean | undefined;
  @Input() isHiddenConfirm: boolean | undefined;
  @Output() checkConfirm = new EventEmitter<boolean>();
  @Output() checkHiddenConfirm = new EventEmitter<boolean>();
  @Output() sendId = new EventEmitter<number>();
  handleShow() {
    this.isShowConfirm = true;
    this.checkConfirm.emit(this.isShowConfirm);
    this.isHiddenConfirm = false;
    this.checkHiddenConfirm.emit(this.isHiddenConfirm);
  }
  handleSendId(i: number) {
    this.sendId.emit(i);
  }
  constructor() {}

  ngOnInit(): void {}
}
