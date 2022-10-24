import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'HeaderComponent',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {
  faMagnifyingGlass = faMagnifyingGlass;
  value: string;

  @Input() isShowModal: boolean | undefined;
  @Input() isHidden: boolean | undefined;

  @Output() checkShow = new EventEmitter<boolean>();
  @Output() checkHidden = new EventEmitter<boolean>();
  @Output() sendValue = new EventEmitter<string>();
  @Output() clickOut = new EventEmitter<HTMLDivElement>();
  @Output() setEdit = new EventEmitter<boolean>();

  @ViewChild('showModal', { static: true }) showModal: any;
  constructor() {
    this.value = '';
  }

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {}

  handleShow() {
    this.isShowModal = true;
    this.checkShow.emit(this.isShowModal);
    this.isHidden = false;
    this.checkHidden.emit(this.isHidden);
    this.clickOut.emit(this.showModal);
    this.setEdit.emit(false);
  }

  handleSendvalue() {
    this.sendValue.emit(this.value);
  }
  handleKey(event: Event) {
    this.handleSendvalue();
  }
  ngAfterViewInit() {}
}
