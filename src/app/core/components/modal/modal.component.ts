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
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnChanges {
  constructor() {}

  @Input() isShow: boolean | undefined;
  @Output() checkShow = new EventEmitter<boolean>();
  isClose = false;
  handleHide() {
    this.isShow = false;
    this.checkShow.emit(this.isShow);
    this.isClose = true;
  }

  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {}
}
