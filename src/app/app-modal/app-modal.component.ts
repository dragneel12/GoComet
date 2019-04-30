import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service'

@Component({
  selector: 'app-app-modal',
  templateUrl: './app-modal.component.html',
  styleUrls: ['./app-modal.component.css']
})
export class AppModalComponent implements OnInit {

  constructor(private obj : MyserviceService) { }

  c:string[]=this.obj.c_();
  s:string[]=this.obj.s_();
  q:number[]=this.obj.q_();
  my_number:number[]=this.obj.m_();

  ngOnInit() {
  }

}
