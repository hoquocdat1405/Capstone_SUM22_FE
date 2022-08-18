import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export interface PlanElement {
  position: number;
  name: string;
  startDate: Date;
  endDate: Date;
  department: string;
  location: string;
  type: string;
  status: boolean;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class PlanComponent implements OnInit {
  columnsToDisplay:string[] = ['position','name','type','status'];
  VI_columns:string[] = ['STT','Tên','Phòng ban','Hình thức','Trạng thái']
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = PLAN_DATA;
  expandedElement!: PeriodicElement | null;

  constructor() {}

  ngOnInit() {}
}

const PLAN_DATA: PlanElement[] = [
  {
    position:1,
    name:'ABCD Loẻm ípUm',
    startDate : new Date('2022-08-13'),
    endDate : new Date('2022-08-17'),
    department : 'Tuyển sinh',
    location : 'N/A',
    type : 'online',
    status : false
  },
  {
    position:2,
    name:'ABCD Loẻm ípUm',
    startDate : new Date('2022-08-27'),
    endDate : new Date('2022-09-30'),
    department : 'Tuyển sinh',
    location : 'THCS Trưng Vương',
    type : 'offline',
    status : false
  },
  {
    position:3,
    name:'ABCD Loẻm ípUm',
    startDate : new Date('2022-07-13'),
    endDate : new Date('2022-09-24'),
    department : 'Tuyển sinh',
    location : 'N/A',
    type : 'online',
    status : false
  },
  {
    position:4,
    name:'ABCD Loẻm ípUm',
    startDate : new Date('2022-08-13'),
    endDate : new Date('2022-10-24'),
    department : 'Tuyển sinh',
    location : 'THCS Bàn Cờ',
    type : 'offline',
    status : false
  },
];
