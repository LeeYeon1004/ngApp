import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ItemsTable } from '../../model/table.interface';

@Component({
  selector: 'ModalComponent',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnChanges {
  constructor(
    private el: ElementRef,
    private clickOutsite: Renderer2,
    private form: FormBuilder
  ) {}

  @Input() isShowModal: boolean = false;
  @Input() isHidden: boolean = false;
  @Input() clickOut: any;

  @Output() checkShow = new EventEmitter<boolean>();
  @Output() checkHidden = new EventEmitter<boolean>();
  @Output() addData = new EventEmitter<ItemsTable>();

  @ViewChild('boxModal') boxModal?: ElementRef;
  @ViewChild('album') album?: ElementRef;
  @ViewChild('inputAlbum') inputAlbum?: ElementRef;
  @ViewChild('date') date?: ElementRef;
  @ViewChild('inputDate') inputDate?: ElementRef;
  @ViewChild('time') time?: ElementRef;
  @ViewChild('inputTime') inputTime?: ElementRef;
  @ViewChild('btnCancel') btnCancel?: ElementRef;
  @ViewChild('btnSub') btnSub?: ElementRef;
  @ViewChild('inputRef', { static: true }) inputRef:
    | ElementRef<HTMLInputElement>
    | undefined;

  songValue: string = '';
  albumValue: string = '';
  dateValue: Date = new Date();
  timeValue: string = '';
  objectData: ItemsTable = {
    id: Math.random(),
    song: this.songValue,
    album: this.albumValue,
    date: this.dateValue,
    time: this.timeValue,
  };
  // validation
  validForm = this.form.group({
    song: ['', [Validators.required]],
    album: ['', [Validators.required]],
    date: ['', [Validators.required]],
    time: ['', [Validators.required]],
  });
  get getValueInput() {
    return this.validForm.controls;
  }
  handleHide() {
    this.isShowModal = false;
    this.checkShow.emit(this.isShowModal);
    this.isHidden = true;
    this.checkHidden.emit(this.isHidden);
  }
  handleAdd() {
    if (this.validForm.valid) {
      this.addData.emit(this.objectData);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.isShowModal);
    if (this.isShowModal == true) {
      this.inputRef?.nativeElement.focus();
    }
  }
  ngOnInit() {}
  // ngAfterViewInit() {
  //   const divElement = (<HTMLElement>this.el.nativeElement).querySelector(
  //     '.modal-box'
  //   );
  //   this.clickOutsite.listen('document', 'click', (e: Event) => {
  //     if (
  //       e.target !== this.clickOut.nativeElement &&
  //       e.target !== this.boxModal?.nativeElement &&
  //       e.target !== this.inputRef?.nativeElement &&
  //       e.target !== this.album?.nativeElement &&
  //       e.target !== this.inputAlbum?.nativeElement &&
  //       e.target !== this.date?.nativeElement &&
  //       e.target !== this.inputDate?.nativeElement &&
  //       e.target !== this.time?.nativeElement &&
  //       e.target !== this.inputTime?.nativeElement &&
  //       e.target !== this.btnCancel?.nativeElement &&
  //       e.target !== this.btnSub?.nativeElement
  //     ) {
  //       this.handleHide();
  //     }
  //   });
  // }
}
