import { Component } from '@angular/core';
import { AppModalComponent } from './app-modal/app-modal.component';
import { MatDialog } from '@angular/material'
import { MyserviceService } from './myservice.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'go-comet';
  constructor(private dia : MatDialog,private ser : MyserviceService) { }

  m:number[]=[1,2,3,4];
  x=1;
  a=0;
  b=0;
  c=0;
  colors:string[]=['','red','blue','green','yellow','brown']
  sizes:string[]=['','S','M','L','xL']
  quantity:number[]=[0,1,2,3,4,5,6,7,8]
  fi="";
  se="";
  th=0;
  cart_value=0;
  ngOnInit(){
  }
  public swap_images(val : number ){
  this.x=this.m[val];
  }
  public selected1(val:string):void{
    if(val==""){
      this.a=0;
    }else{
      this.a=1;
      this.fi=val;
    }
  }
  public selected2(val:string):void{
    if(val==""){
      this.b=0;
    }else{
      this.b=1;
      this.se=val;
    }
  }
  public selected3(val: number):void{
    if(val==0){
      this.c=0;
    }else{
      this.c=1;
      this.th=val;
    }
  }

  public cart():void{
    if(this.a==1 && this.b==1 && this.c==1){
      this.ser.serv(this.fi,this.se,this.th);
      this.a=0;
      this.b=0;
      this.c=0;
      this.cart_value=this.cart_value+1;
    }else{
      alert("select all item of menu");
    }
  }

  public clear():void{
    this.ser.clear();
this.cart_value=0;
  }

  show(): void {
    const dialogRef = this.dia.open(AppModalComponent);
  }


}
