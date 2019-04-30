import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  my_colors:string[]=[];
  my_sizes:string[]=[];
  my_quantity:number[]=[];
  my_number:number[]=[];
  k=0;

  constructor() { }

  serv(a:string,b:string,c:number):void{
    this.my_colors.push(a);
    this.my_sizes.push(b);
    this.my_quantity.push(c);
    this.my_number.push(this.k);
    this.k++;
  }

  c_():string[]{
    return this.my_colors;
  }
  s_():string[]{
    return this.my_sizes;
  }
  q_():number[]{
    return this.my_quantity;
  }
  m_():number[]{
    return this.my_number;
  }
clear():void{
  while(this.my_colors.length > 0){
   this.my_colors.pop();
   this.my_sizes.pop();
   this.my_quantity.pop();
   this.my_number.pop();
}
}

}
