import { Component, Input, OnInit,OnDestroy,OnChanges,SimpleChanges,ElementRef,DoCheck,AfterContentInit,AfterViewChecked, ViewChild,AfterViewInit, QueryList,AfterContentChecked, ViewChildren, ContentChild} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,OnDestroy,OnChanges,DoCheck,AfterViewChecked,AfterContentInit {

flag:boolean=true
@ViewChildren("header") elem:QueryList<any>
uname:any
counter:number=0
  interval:any
toggleChild(){
  this.flag=!this.flag
}
// result:string
// getData(value){
//   this.result=value;
// }
// salesProducts=[
//   {name:"Mobile",price:25000},
//   {name:"Lens Protector",price:500},
//   {name:"Back Guard",price:600},
//   {name:"Laptop",price:45000},
// ]
// newProducts=[
//   {name:"Book",price:250},
//   {name:"Pens",price:50},
//   {name:"Eraser",price:6},
//   {name:"Sharpener",price:20},
// ]
  constructor() { 
    console.log("Parent constructor has been called ");
    
  }

  ngOnInit() {
    console.log("Parent oninit has been called ");
    // this.interval=setInterval(()=>{
    //   this.counter++
    //   console.log(this.counter);
    //   },1000)
  }
  ngOnDestroy(): void {
    console.log("Parent component has been destroyed");
    //  clearInterval(this.interval)
  }
ngOnChanges(changes:SimpleChanges): void {
console.log("Parent onchanges has been called");
console.log(changes);
}
ngDoCheck(): void {
  console.log("child Docheck has been called");
  
}
ngAfterViewInit(): void {
  console.log(this.elem);
}
ngAfterViewChecked():void {
  console.log("child after view check");
  
}
ngAfterContentInit(): void {
  console.log("child after content init");
  
}
ngAfterContentChecked(): void {
  console.log("child after content checked");
  
}
}
