import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/config-api/http.services';
import { ItemsTable } from '../../model/table.interface';

@Component({
  selector: 'ConfirmModal',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent implements OnInit {
  items!: ItemsTable[];
  newItems!: ItemsTable[];
  faTriangleExclamation = faTriangleExclamation;
  @Input() idItem: number | undefined;
  @Input() isShowConfirm: boolean | undefined;
  @Input() isHiddenConfirm: boolean | undefined;
  @Output() hideConfirm = new EventEmitter<boolean>();
  @Output() checkHiddenConfirm = new EventEmitter<boolean>();
  @Output() sendData = new EventEmitter<ItemsTable[]>();

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getNews().subscribe((data: any) => {
      this.items = data;
      this.newItems = this.items;
    });
  }

  handleRemove() {
    this.newItems = this.newItems.filter((item) => item.id !== this.idItem);
    this.apiService.deleteItem(this.idItem).subscribe();
    this.sendData.emit(this.newItems);
  }
  handleHideConfirm() {
    this.isShowConfirm = false;
    this.hideConfirm.emit(this.isShowConfirm);
    this.isHiddenConfirm = true;
    this.checkHiddenConfirm.emit(this.isHiddenConfirm);
  }
}
