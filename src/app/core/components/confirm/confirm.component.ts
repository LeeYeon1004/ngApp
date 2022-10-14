import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ConfirmModal',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent implements OnInit {
  constructor() {}

  faTriangleExclamation = faTriangleExclamation;
  @Input() isShowConfirm: boolean | undefined;
  @Input() isHiddenConfirm: boolean | undefined;
  @Output() checkConfirm = new EventEmitter<boolean>();
  @Output() checkHiddenConfirm = new EventEmitter<boolean>();
  @Input() handleRemove(i: number) {}
  handleHide() {
    this.isShowConfirm = false;
    this.checkConfirm.emit(this.isShowConfirm);
    this.isHiddenConfirm = true;
    this.checkHiddenConfirm.emit(this.isHiddenConfirm);
  }
  ngOnInit(): void {}
}
