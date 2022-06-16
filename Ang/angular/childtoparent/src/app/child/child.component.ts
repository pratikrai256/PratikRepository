import { Component, OnInit, Output,EventEmitter, Input, SimpleChanges, OnDestroy, OnChanges,ContentChild,QueryList } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnDestroy,OnChanges {

  counter:number=0
  interval:any
  @Input() uname
  @ContentChild("cheader",{static:false})celement:QueryList<any>

  // @Output() message:EventEmitter<string> = new EventEmitter<string>()
  // passData(){
  //   this.message.emit("The data has come from child component")
  // }
  // @Input() products

  constructor() {
    console.log("Child constructor has been called");
  }

  ngOnInit() {
    console.log("Child oninit has been called");
    // this.interval=setInterval(()=>{
    //   this.counter++
    //   console.log(this.counter);
    //   },1000)
    
  }
  ngOnDestroy(): void{
    console.log("Child component has been destroyed");
    //  clearInterval(this.interval)
  }
ngOnChanges(changes:SimpleChanges): void {
console.log("child onchanges has been called");
console.log(changes);
}
}
