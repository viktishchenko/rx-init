import { Subject, BehaviorSubject, ReplaySubject } from "rxjs";

// Subject stream
// -------
// document.addEventListener("click", () => {
//   console.log("halo"); // halo
//   const stream$ = new Subject();
//   stream$.subscribe((val) => console.log("val>>", val)); // v1 v2
//   stream$.next("v1");
//   stream$.next("v2");
// });

// BehaviorSubject stream
// -------
// document.addEventListener("click", () => {
//   const stream$ = new BehaviorSubject("need init value");
//   stream$.subscribe((val) => console.log("val>>", val)); // need init value v2 v3
//   stream$.next("v2");
//   stream$.next("v3");
// });
// -------
// document.addEventListener("click", () => {
//   const stream$ = new BehaviorSubject("need init value");
//   stream$.next("v2");
//   stream$.next("v3");
//   stream$.subscribe((val) => console.log("val>>", val)); // v3 (!!!!)
// });

// ReplaySubject stream
// -------
// document.addEventListener("click", () => {
//   const stream$ = new ReplaySubject();
//   stream$.subscribe((val) => console.log("val>>", val)); // v2 v3
//   stream$.next("v2");
//   stream$.next("v3");
// });
// -------
// document.addEventListener("click", () => {
//   const stream$ = new ReplaySubject();
//   stream$.next("v1");
//   stream$.next("v2");
//   stream$.next("v3");
//   stream$.subscribe((val) => console.log("val>>", val)); // v1 v2 v3
// });
// with buffer
// -------
document.addEventListener("click", () => {
  const stream$ = new ReplaySubject(1);
  stream$.next("v1");
  stream$.next("v2");
  stream$.next("v3");
  stream$.subscribe((val) => console.log("val>>", val)); // v3
});
