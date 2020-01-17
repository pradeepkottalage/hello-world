 RXJS
 1. a utility for handling asynchronous data streams.
 
 Hot vs Cold observables
  
  HOT: emits same values for every subscription
  COLD: emits different values for every subscription
  //https://angularfirebase.com/lessons/rxjs-quickstart-with-20-examples/
 
 Push vs Pull
 
 Push: Data producer decides when the data is avail 
 Pull: Data Consumer decides when the data is avail 
 
 Observables are also Push based ;which push multiple value
 
 create Obs
 
 var obs1 = new Observable(observer=>{
 observer.next("multiple value 1"),
 observer.next("multiple value 2")
 observer.error(),
 observer.complete("completed")
 // values emited from next method are asynchronously
 })
 obs1.subscribe((data)=>{console.log(data);});
 
 /* not possible in normal functions*/
 function(){
 return ("multiple value 1");
 return ("multiple values 2");
 }
 
 //A Pipeable Operator is a function that takes an Observable as its input and returns another Observable.
  
  // forkJoin=>
  //forkJoin is used to make a call to multiple api, subscribtion happens after all req completion 
  
  //switchMap=>
   // Switch map operator used to cancel request when we make call to same api multiple times
  
  //Retry operator =>
  
 
  
  
  Subject:
  
   Subject is a special type of Observable that allows values to be multicasted
   Subject can have multiple subscription all of them will receive emitted values with  single next method call  
   
   const subject = new Subject<number>();
 
subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});
 
subject.next(1);
subject.next(2);
// observerA: 1
// observerB: 1
// observerA: 2
// observerB: 2

=> Subject acts as Observer so we can pass a subject to observable's subscription

let observable1 = from([1,2,3]);
observable1.subscribe(subject)

subjectAsObserver(){
  let sub = new Subject();
  sub.subscribe((i)=>{console.log(`subjects subscription 1 :${i}`);})
  sub.subscribe((i)=>{console.log(`subjects subscription 2 :${i}`);})
  
  let obs = from([1,2,3]);
  obs.subscribe(sub);
//With the approach above, we essentially just converted a unicast Observable execution to multicast, through the Subject. 
}

types of Subject
1.BehaviorSubject, 2.ReplaySubject,  3.AsyncSubject.
//https://medium.com/@luukgruijs/understanding-rxjs-behaviorsubject-replaysubject-and-asyncsubject-8cc061f1cfc0
BehaviorSubject

It stores the latest value emitted to its consumers, when subscribe to observers it emits latest value
behaviorsubject(){
   let sub = new BehaviorSubject(1);
   sub.subscribe((i)=>{ console.log("first Sub "+i);})
   sub.subscribe((i)=>{ console.log("second sub"+ i);})
  
    sub.next(3)
    sub.subscribe((i)=>{ console.log("third Sub "+i);})
  }
  use of BehaviorSubject
  https://coryrylan.com/blog/angular-observable-data-services
  
ReplaySubject
 
A ReplaySubject records multiple values from the Observable execution and replays them to new subscribers.
replaySub(){
    let sub = new ReplaySubject(3)
    sub.subscribe((i)=>{console.log("replay sub 1 "+i);})
    sub.next(1)
    sub.next(2)
    sub.next(3)
    sub.next(4)
    //sub.subscribe((i)=>{console.log("replay sub 2 "+i);})
    sub.next(5);
  }
// replay sub 1 1
// replay sub 1 3
// replay sub 1 2
// replay sub 1 4
// replay sub 1 5  

AsyncSubject
where only the last value of the Observable execution is sent to its observers, and only when the execution completes.

content projection