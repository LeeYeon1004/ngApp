import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'HeaderComponent',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  constructor() {}

  @Input() isShow: boolean | undefined;
  @Output() checkShow = new EventEmitter<boolean>();
  handleShow() {
    this.isShow = true;
    this.checkShow.emit(this.isShow);
  }
  ngOnInit(): void {}
}
