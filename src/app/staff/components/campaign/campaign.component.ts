import { DecimalPipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
// import { FormControl } from '@angular/forms';

export interface CampaignElement {
  id: number;
  name: string;
  state: boolean;
  status: string;
  pendingApplication: number;
  completion: number;
}

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css'],
})
export class CampaignComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  selectedItem = 'all';

  displayedColumns: string[] = [
    'state',
    'name',
    'status',
    'pendingApplication',
    'completion',
  ];
  dataSource = new MatTableDataSource<CampaignElement>(CAMPAIGN_ELEMENT);

  constructor(private router:Router) {}

  decimalPipe = new DecimalPipe(navigator.language);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Mỗi trang :';
    this.paginator._intl.firstPageLabel = 'Trang đầu';
    this.paginator._intl.lastPageLabel = 'Trang cuối';
    this.paginator._intl.nextPageLabel = 'Trang tiếp theo';
    this.paginator._intl.previousPageLabel = 'Trang trước';
    this.paginator._intl.getRangeLabel = (
      page: number,
      pageSize: number,
      length: number
    ) => {
      const start = page * pageSize + 1;
      const end = (page + 1) * pageSize;
      return `${start} - ${end} trên ${this.decimalPipe.transform(length)} trang`;
    };
  }

  ngOnInit() {}


  
}

const CAMPAIGN_ELEMENT: CampaignElement[] = [
  {
    id: 1,
    name: 'Tuyển sinh năm 2022',
    state: true,
    status: 'normal',
    pendingApplication: 12,
    completion: 45,
  },
  {
    id: 2,
    name: 'Tư vấn tuyển sinh tháng 5 năm 2022',
    state: false,
    status: 'completed',
    pendingApplication: 34,
    completion: 100,
  },
  {
    id: 3,
    name: 'Tuyển sinh năm 2022',
    state: true,
    status: 'suspended',
    pendingApplication: 12,
    completion: 45,
  },
  {
    id: 4,
    name: 'Tư vấn tuyển sinh tháng 5 năm 2022',
    state: false,
    status: 'blocked',
    pendingApplication: 34,
    completion: 100,
  },
  {
    id: 5,
    name: 'Tuyển sinh năm 2022',
    state: true,
    status: 'normal',
    pendingApplication: 12,
    completion: 45,
  },
  {
    id: 6,
    name: 'Tư vấn tuyển sinh tháng 5 năm 2022',
    state: false,
    status: 'completed',
    pendingApplication: 34,
    completion: 100,
  },
  {
    id: 7,
    name: 'Tuyển sinh năm 2022',
    state: true,
    status: 'normal',
    pendingApplication: 12,
    completion: 45,
  },
  {
    id: 8,
    name: 'Tư vấn tuyển sinh tháng 5 năm 2022',
    state: false,
    status: 'completed',
    pendingApplication: 34,
    completion: 100,
  },
];
