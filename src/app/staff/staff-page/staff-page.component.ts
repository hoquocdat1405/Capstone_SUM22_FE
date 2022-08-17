import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-staff-page',
  templateUrl: './staff-page.component.html',
  styleUrls: ['./staff-page.component.scss'],
})
export class StaffPageComponent implements OnInit {
  opened = true;
  option_opened = true;

  Navigation:{
    name:string,
    path:string,
    child:{
      name:string,
      path:string,
    }[]
  }[];

  constructor() {
    this.Navigation = [
      {name:'Trường học',path:'/staff/school',
      child:[{
          name:'Tổng quan',path:'/staff/school'},
          {name:'Q&A',path:'/staff/school/qa'}
      ]},
      {name:'Chiến dịch tuyển sinh',path:'/staff/campaign',  
      child:[{
        name:'Tổng quan',path:'/staff/campaign'},
        {name:'Tạo mới',path:'/staff/campaign/create'}
      ]},   
      {name:'Tin tức tuyển sinh',path:'/staff/news',  
      child:[{
        name:'Tổng quan',path:'/staff/news'},
        {name:'Tạo mới',path:'/staff/news/create'}
      ]},   
      {name:'Hồ sơ ứng tuyển',path:'/staff/application',  
      child:[{
        name:'Quản lí',path:'/staff/application'},
        {name:'Đã duyệt',path:'/staff/application/create'}
      ]},   

    ]
  
  }

  ngOnInit() {}
}
