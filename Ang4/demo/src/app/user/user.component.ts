import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnDestroy {

  count=0
   private mySub: Subscription = new Subscription;

  constructor() { }

  ngOnInit(): void {
    //Promises
    const promise=new Promise(resolve=>{
      console.log("Promise has been called");

      setTimeout(()=>{
        resolve("Data 1 from Promise")
        resolve("Data 2 from Promise")
        resolve("Data 3 from Promise")
        resolve("Data 4 from Promise")

      },1000);
    })
    //listening the Promises
    promise.then(result=>{
      console.log(result)
    })
    

    //Observable
    const observable=new Observable(sub=>{
      console.log("Observable has been called");
      setInterval(()=>{
        this.count++
        sub.next("Data from Observable " +this.count);
      },1000);
      setTimeout(()=>{
        sub.next("Data 1 from Observable ")
        sub.next("Data 2 from Observable ")
        sub.next("Data 3 from Observable ")
        sub.next("Data 4 from Observable ")

      },1000);
    })
    //listening to observable

     observable.subscribe(result=>{console.log(result);
  //  observable.pipe(filter(data=>data==="Data 2 from Observable")).subscribe(result=>{console.log(result);
    })
  }
  ngOnDestroy(): void {
   console.log("User Destrroyed");
   this.mySub.unsubscribe()
      
  }

}

