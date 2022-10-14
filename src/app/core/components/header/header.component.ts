import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'HeaderComponent',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  constructor() {}

  @Input() isShowModal: boolean | undefined;
  @Input() isHidden: boolean | undefined;
  @Output() checkShow = new EventEmitter<boolean>();
  @Output() checkHidden = new EventEmitter<boolean>();
  handleShow() {
    this.isShowModal = true;
    this.checkShow.emit(this.isShowModal);
    this.isHidden = false;
    this.checkHidden.emit(this.isHidden);
  }
  ngOnInit(): void {}
}
