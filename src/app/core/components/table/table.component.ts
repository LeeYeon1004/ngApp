import { Component, OnInit } from '@angular/core';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { ItemsTable } from '../../model/table.interface';

@Component({
  selector: 'TableComponent',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  faAnglesUp = faAnglesUp;
  items: ItemsTable[] = [
    {
      song: 'La La La',
      album: 'Playlist by Lee_Yeon',
      date: '11/10/2022',
      time: '03:40',
    },
    {
      song: 'Có chơi có chịu',
      album: 'Playlist by Lee_Yeon',
      date: '11/10/2022',
      time: '03:40',
    },
    {
      song: 'Tấm lòng son',
      album: 'Playlist by Lee_Yeon',
      date: '11/10/2022',
      time: '03:40',
    },
    {
      song: 'That girl',
      album: 'Playlist by Lee_Yeon',
      date: '11/10/2022',
      time: '03:40',
    },
    {
      song: 'Counting star',
      album: 'Playlist by Lee_Yeon',
      date: '11/10/2022',
      time: '03:40',
    },
    {
      song: 'Waiting for you',
      album: 'Playlist by Lee_Yeon',
      date: '11/10/2022',
      time: '03:40',
    },
    {
      song: 'Take me to your heart',
      album: 'Playlist by Lee_Yeon',
      date: '11/10/2022',
      time: '03:40',
    },
    {
      song: 'La La La',
      album: 'Playlist by Lee_Yeon',
      date: '11/10/2022',
      time: '03:40',
    },
    {
      song: 'Có chơi có chịu',
      album: 'Playlist by Lee_Yeon',
      date: '11/10/2022',
      time: '03:40',
    },
    {
      song: 'Tấm lòng son',
      album: 'Playlist by Lee_Yeon',
      date: '11/10/2022',
      time: '03:40',
    },
    {
      song: 'That girl',
      album: 'Playlist by Lee_Yeon',
      date: '11/10/2022',
      time: '03:40',
    },
    {
      song: 'Counting star',
      album: 'Playlist by Lee_Yeon',
      date: '11/10/2022',
      time: '03:40',
    },
    {
      song: 'Waiting for you',
      album: 'Playlist by Lee_Yeon',
      date: '11/10/2022',
      time: '03:40',
    },
    {
      song: 'Take me to your heart',
      album: 'Playlist by Lee_Yeon',
      date: '11/10/2022',
      time: '03:40',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
