import { range, interval, timer } from "rxjs";
// import { of, from, map, scan, Observable, fromEvent } from "rxjs";

/* add shortcut
 * empbr
 * (first) => ( second )
 */

// simple stream --of--
//------------
// const stream$ = of(1, 2, 3, 4);
// stream$.subscribe((val) => console.log("val>>>", val)); // 1,2,3,4

// simple stream --from-- []
//------------
// const stream$ = from([1, 2, 3, 4]);
// stream$.subscribe((val) => console.log("val>>>", val)); // 1,2,3,4

// simple stream --from-- [] + scan => []
//------------
// const stream$ = from([1, 2, 3]).pipe(
//   scan((acc, val) => acc.concat(val), [])
// );
// stream$.subscribe((val) => console.log("val>>>", val)); // [1],[1,2],[1,2,3]

// create stream
//------------
// const stream$ = new Observable((observer) => {
//   observer.next("First value");
//   setTimeout(() => {
//     observer.next("Second value through 1000ms");
//   }, 1000);
//   setTimeout(() => {
//     observer.error("Oh, no it's error");
//   }, 2000);
//   setTimeout(() => {
//     observer.next("Fourth value through 3000ms");
//   }, 3000);
// });
// // stream$.subscribe((val) => console.log("val>>", val)); // val>> 1st → 2nd → Oh, no it's error X!!
// stream$.subscribe({
//   next: (val) => console.log("val>>", val), // 1st 2nd
//   error: (val) => console.log("val>>", val), // "Oh, no it's error
//   complete: (val) => console.log("val>>", val), // 3rd → X!!  doesn't break the app
// });

// stream from events
//------------
// fromEvent(document.querySelector("canvas"), "mousemove").subscribe((event) =>
//   console.log(event, "event") // mousemove { target: canvas, buttons: 0, clientX: 188, clientY: 44, layerX: 188, layerY: 44 }
// );
//------------
// fromEvent(document.querySelector("canvas"), "mousemove")
//   .pipe(
//     map((e) => ({
//       x: e.offsetX,
//       y: e.offsetY,
//       ctx: e.target.getContext("2d"),
//     }))
//   )
//   .subscribe(
//     (event) => console.log(event, "event") // Object { x: 135, y: 133, ctx: CanvasRenderingContext2D }
//   );
//------------
// fromEvent(document.querySelector("canvas"), "mousemove")
//   .pipe(
//     map((e) => ({
//       x: e.offsetX,
//       y: e.offsetY,
//       ctx: e.target.getContext("2d"),
//     }))
//   )
//   .subscribe((pos) => pos.ctx.fillRect(pos.x, pos.y, 2, 2)); // draw on cavas

// // add new stream (for clear btn)
// const clear$ = fromEvent(document.getElementById("clear"), "click");
// clear$.subscribe(() => {
//   const canvas = document.querySelector("canvas");
//   canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
// });

// interval stream create/delete
//------------
// const sub$ = interval(500).subscribe((val) => console.log(val)); // 0,1,2,3,4
// setTimeout(() => {
//   sub$.unsubscribe();
// }, 3000);

// timer stream
//------------
// timer(2500).subscribe((val) => console.log(val)); // 0 (through 2500ms)

//  range stream
//------------
range(42, 10).subscribe((val) => console.log("val>>", val)); // 42...51
