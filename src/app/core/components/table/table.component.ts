import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { ItemsTable } from '../../model/table.interface';

@Component({
  selector: 'TableComponent',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnChanges {
  faAnglesUp = faAnglesUp;
  @Input() newItems: ItemsTable[] | undefined;
  @Input() isShowConfirm: boolean | undefined;
  @Input() isHiddenConfirm: boolean | undefined;
  @Input() isShowModal: boolean | undefined;
  @Input() isHidden: boolean | undefined;

  @Output() checkConfirm = new EventEmitter<boolean>();
  @Output() checkHiddenConfirm = new EventEmitter<boolean>();
  @Output() sendId = new EventEmitter<number>();
  @Output() setEdit = new EventEmitter<boolean>();
  @Output() checkShow = new EventEmitter<boolean>();
  @Output() checkHidden = new EventEmitter<boolean>();
  handleShow() {
    this.isShowConfirm = true;
    this.checkConfirm.emit(this.isShowConfirm);
    this.isHiddenConfirm = false;
    this.checkHiddenConfirm.emit(this.isHiddenConfirm);
  }
  handleEdit() {
    this.setEdit.emit(true);
    this.isShowModal = true;
    this.checkShow.emit(this.isShowModal);
    this.isHidden = false;
    this.checkHidden.emit(this.isHidden);
  }
  handleSendId(i: number) {
    this.sendId.emit(i);
  }
  handleKey(event: Event) {
    this.handleEdit();
  }
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(): void {}
}
