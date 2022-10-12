import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ModalComponent',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('hello');
  }

  @Output() isShow = true;
  handleHide() {
    this.isShow = false;
  }
}
