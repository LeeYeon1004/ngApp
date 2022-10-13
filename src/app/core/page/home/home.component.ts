import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnChanges {
  constructor() {}

  isShow: boolean = false;
  checkShowed($event: boolean) {
    this.isShow = $event;
  }
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {}
}
