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
import { ApiService } from 'src/app/config-api/http.services';
import { ItemsTable } from '../../model/table.interface';

@Component({
  selector: 'ModalComponent',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnChanges {
  @Input() newItems!: ItemsTable[];
  @Input() isShowModal: boolean = false;
  @Input() setEditBtn: boolean = false;
  @Input() editItem: ItemsTable | undefined;
  @Input() idItemEdit: number | undefined;
  songValue: string | undefined;
  albumValue: string | undefined;
  dateValue: Date = new Date();
  timeValue: string | undefined;

  @Output() checkShowModal = new EventEmitter<boolean>();
  @Output() sendData = new EventEmitter<ItemsTable[]>();

  constructor(
    private el: ElementRef,
    private clickOutsite: Renderer2,
    private form: FormBuilder,
    private apiService: ApiService
  ) {}

  // @ViewChild('boxModal') boxModal?: ElementRef;
  // @ViewChild('album') album?: ElementRef;
  // @ViewChild('inputAlbum') inputAlbum?: ElementRef;
  // @ViewChild('date') date?: ElementRef;
  // @ViewChild('inputDate') inputDate?: ElementRef;
  // @ViewChild('time') time?: ElementRef;
  // @ViewChild('inputTime') inputTime?: ElementRef;
  // @ViewChild('btnCancel') btnCancel?: ElementRef;
  // @ViewChild('btnSub') btnSub?: ElementRef;
  @ViewChild('inputRef', { static: true }) inputRef:
    | ElementRef<HTMLInputElement>
    | undefined;
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

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isShowModal == true) {
      this.inputRef?.nativeElement.focus();
    }
    if (this.isShowModal === true && this.setEditBtn === true) {
      this.songValue = this.editItem?.song;
      this.albumValue = this.editItem?.album;
      this.timeValue = this.editItem?.time;
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

  handleHide() {
    this.isShowModal = false;
    this.checkShowModal.emit(this.isShowModal);
  }
  handleAdd() {
    const item: ItemsTable = {
      id: Math.random(),
      song: this.songValue,
      album: this.albumValue,
      date: this.dateValue,
      time: this.timeValue,
    };
    if (this.validForm.valid && this.setEditBtn === false) {
      this.apiService.postItem(item).subscribe();
      this.newItems = [...this.newItems, item];
      this.sendData.emit(this.newItems);
      this.handleHide();
    } else {
      this.apiService.putItem(this.idItemEdit, item).subscribe();
      this.sendData.emit(this.newItems);
      this.handleHide();
    }
  }
  handleKey(event: Event) {
    this.handleAdd();
  }
}
