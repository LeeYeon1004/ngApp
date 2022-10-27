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

  @Output() hideConfirm = new EventEmitter<boolean>();
  @Output() checkHiddenConfirm = new EventEmitter<boolean>();
  @Output() sendId = new EventEmitter<number>();
  @Output() setEdit = new EventEmitter<boolean>();
  @Output() checkShowModal = new EventEmitter<boolean>();
  @Output() checkHidden = new EventEmitter<boolean>();
  handleShowConfirm() {
    this.isShowConfirm = true;
    this.hideConfirm.emit(this.isShowConfirm);
    this.isHiddenConfirm = false;
    this.checkHiddenConfirm.emit(this.isHiddenConfirm);
  }
  handleShowModal() {
    this.setEdit.emit(true);
    this.isShowModal = true;
    this.checkShowModal.emit(this.isShowModal);
    this.isHidden = false;
    this.checkHidden.emit(this.isHidden);
  }
  handleSendId(id: number) {
    this.sendId.emit(id);
  }
  handleKey(event: Event) {
    this.handleShowModal();
  }
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(): void {}
}
