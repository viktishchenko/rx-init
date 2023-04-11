import { interval, fromEvent } from "rxjs";
import {
  map,
  filter,
  tap,
  take,
  takeWhile,
  scan,
  reduce,
  switchMap,
} from "rxjs/operators";

// const sub$ = interval(1000).subscribe({
//   next: (next) => console.log("next>>", next), // 0,1,2,3
//   complete: (comp) => console.log("comp>>", comp),
// });
// setTimeout(() => {
//   sub$.unsubscribe();
// }, 5000);

// with pipe
// -------
// const sub$ = interval(1000)
//   .pipe(
//     map((v) => v * 3),
//     filter((v) => v % 2 === 0)
//   )
//   .subscribe({
//     next: (next) => console.log("next>>", next), // 0,6,12,18
//     complete: (comp) => console.log("comp>>", comp),
//   });
// setTimeout(() => {
//   sub$.unsubscribe();
// }, 8000);

// with pipe & tap (for check value e.g.)
// -------
// const sub$ = interval(1000)
//   .pipe(
//     tap((val) => console.log("val>>", val)), // 0,1,2,3,4,5,6
//     map((v) => v * 3),
//     filter((v) => v % 2 === 0)
//   )
//   .subscribe({
//     next: (next) => console.log("next>>", next), // 0,6,12,18
//     complete: (comp) => console.log("comp>>", comp),
//   });
// setTimeout(() => {
//   sub$.unsubscribe();
// }, 8000);

// with pipe & take (limit results)
// -------
// const sub$ = interval(1000)
//   .pipe(
//     tap((val) => console.log("val>>", val)), // 0,1,2,3,4,5,6,7,8
//     map((v) => v * 3),
//     filter((v) => v % 2 === 0),
//     take(5)
//   )
//   .subscribe({
//     next: (next) => console.log("next>>", next), // 0,6,12,18,24
//     complete: () => console.log("complete>>"), // complete>>
//   });

// with pipe & takeWhile (limit results)
// -------
// const sub$ = interval(1000)
//   .pipe(
//     tap((val) => console.log("val>>", val)), // 0,...,7
//     // map((v) => v * 3),
//     // filter((v) => v % 2 === 0),
//     // take(5)
//     takeWhile((v) => v < 7)
//   )
//   .subscribe({
//     next: (next) => console.log("next>>", next), // 0,...,7
//     complete: () => console.log("complete>>"), // complete>>
//   });

// with pipe & scan (reducer like)
// -------
// const sub$ = interval(1000)
//   .pipe(
//     tap((val) => console.log("val>>", val)), // 0,...,4
//     // map((v) => v * 3),
//     // filter((v) => v % 2 === 0),
//     take(5),
//     // takeWhile((v) => v < 7)
//     // scan((acc, v) => acc + v, 0)
//   )
//   .subscribe({
//     next: (next) => console.log("next>>", next), // 0,...,10
//     complete: () => console.log("complete>>"), // // complete>>
//   });

// with pipe & reducer (return acc value)
// -------
// const sub$ = interval(1000)
//   .pipe(
//     tap((val) => console.log("val>>", val)), // 0,...,4
//     // map((v) => v * 3),
//     // filter((v) => v % 2 === 0),
//     take(5),
//     // takeWhile((v) => v < 7)
//     // scan((acc, v) => acc + v, 0)
//     reduce((acc, v) => acc + v, 0)
//   )
//   .subscribe({
//     next: (next) => console.log("next>>", next), // 10
//     complete: () => console.log("complete>>"), // // complete>>
//   });

// with pipe & fromEvent with 2!! streams
// -------
// fromEvent(document, "click").subscribe(() => {
//   const stream$ = interval(1000).pipe(
//     tap((v) => console.log("v>>", v)), // 0,...,6
//     take(7),
//     reduce((acc, v) => acc + v)
//   );
//   stream$.subscribe({
//     next: (val) => console.log("val>>", val), // 21
//     complete: () => console.log("complete"), // complete
//   });
// });

// with pipe & fromEvent rewrite with one stream & switchMap
// -------
fromEvent(document, "click")
  .pipe(
    switchMap((event) => {
      return interval(1000).pipe(
        tap((v) => console.log("v>>", v)), // 0,...,6
        take(7),
        reduce((acc, v) => acc + v)
      );
    })
  )
  .subscribe({
    next: (val) => console.log("val>>", val), // 21
    complete: () => console.log("complete"), //
  });
