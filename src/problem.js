import { interval } from "rxjs";
import { filter, map, take, scan } from "rxjs/operators";

const btn = document.getElementById("interval");
const rxjsBtn = document.getElementById("rxjs");
const display = document.querySelector("#problem .result");

const people = [
  { name: "Vladilen", age: 25 },
  { name: "Elena", age: 17 },
  { name: "Ivan", age: 18 },
  { name: "Igor", age: 14 },
  { name: "Lisa", age: 32 },
  { name: "Irina", age: 23 },
  { name: "Oleg", age: 20 },
];

// js - display data with sec interval

btn.addEventListener("click", () => {
  let i = 0;
  const adult = [];

  const interval = setInterval(() => {
    btn.disabled = true;
    if (people[i]) {
      if (people[i].age >= 18) {
        adult.push(people[i].name);
      }
      display.textContent = adult.join(" ");
      i++;
    } else {
      btn.disabled = false;
      clearInterval(interval);
    }
  }, 1000);
});

// rxjs - display data with sec interval

rxjsBtn.addEventListener("click", () => {
  rxjsBtn.disabled = true;
  interval(1000)
    .pipe(
      take(people.length),
      filter((idx) => people[idx].age >= 18),
      map((idx) => people[idx].name),
      scan((acc, v) => acc.concat(v), [])
    )
    .subscribe({
      next: (res) => (display.textContent = res.join(" ")),
      error: null,
      complete: () => (rxjsBtn.disabled = false),
    });
});
