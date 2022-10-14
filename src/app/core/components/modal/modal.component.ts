import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'ModalComponent',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnChanges {
  constructor() {}

  @Input() isShowModal: boolean | undefined;
  @Input() isHidden: boolean | undefined;
  @Output() checkShow = new EventEmitter<boolean>();
  @Output() checkHidden = new EventEmitter<boolean>();
  handleHide() {
    this.isShowModal = false;
    this.checkShow.emit(this.isShowModal);
    this.isHidden = true;
    this.checkHidden.emit(this.isHidden);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.isShowModal);
  }
  ngOnInit(): void {}
}
