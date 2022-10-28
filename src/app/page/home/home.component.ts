import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/config-api/http.services';
import { ItemsTable } from '../../core/model/table.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnChanges {
  items!: ItemsTable[];
  newItems!: ItemsTable[];
  idItem: number | undefined;
  isShowModal: boolean = false;
  isShowConfirm: boolean = false;
  isHiddenConfirm: boolean = false;
  setEditBtn: boolean = false;
  editItem: ItemsTable | undefined;

  constructor(private apiService: ApiService) {}

  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {
    this.apiService.getNews().subscribe((data: any) => {
      this.items = data;
      this.newItems = this.items;
    });
  }

  handleGetId($event: number) {
    this.idItem = $event;
    // get item edit
    this.apiService.getItem($event).subscribe((data: any) => {
      this.editItem = data;
    });
  }
  handleSetData($event: ItemsTable[]) {
    this.newItems = $event;
  }
  handleGetValue($event: string) {
    // SEARCH
    this.newItems = this.items.filter((item) =>
      item.song?.toLowerCase().includes($event.toLowerCase())
    );
  }
  checkShowModal($event: boolean) {
    this.isShowModal = $event;
  }
  hideConfirm($event: boolean) {
    this.isShowConfirm = $event;
  }
  checkHiddenConfirm($event: boolean) {
    this.isHiddenConfirm = $event;
  }
  setEdit($event: boolean) {
    this.setEditBtn = $event;
  }
}
