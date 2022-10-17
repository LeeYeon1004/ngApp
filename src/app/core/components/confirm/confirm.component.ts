import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { items } from '../../config-api/table.config';
import { ItemsTable } from '../../model/table.interface';

@Component({
  selector: 'ConfirmModal',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent implements OnInit {
  constructor() {}
  newItems: ItemsTable[] = items;
  @Input() idItem: number | undefined;

  faTriangleExclamation = faTriangleExclamation;
  @Input() isShowConfirm: boolean | undefined;
  @Input() isHiddenConfirm: boolean | undefined;
  @Output() checkConfirm = new EventEmitter<boolean>();
  @Output() checkHiddenConfirm = new EventEmitter<boolean>();
  @Output() sendData = new EventEmitter<ItemsTable[]>();

  handleRemove() {
    this.newItems = this.newItems.filter((item) => item.id !== this.idItem);
    this.sendData.emit(this.newItems);
  }
  handleHide() {
    this.isShowConfirm = false;
    this.checkConfirm.emit(this.isShowConfirm);
    this.isHiddenConfirm = true;
    this.checkHiddenConfirm.emit(this.isHiddenConfirm);
  }
  ngOnInit(): void {}
}
