const { fromEvent } = rxjs;
const { map, throttleTime } = rxjs.operators;

throttle().subscribe({
  next: (value) => {
    print("#t-output", value);
  },
});

function throttle() {
  let tInput = document.querySelector("#t-field");

  return (thObservable$ = fromEvent(tInput, "input").pipe(
    throttleTime(2000),
    map((data) => data.target.value),
  ));
  // thObservable$.subscribe({
  //   next: (value) => {
  //     print("#t-output", value);
  //   },
  // });
}

const print = (elemento, valor) => {
  if (!valor) return;
  let etiqueta = document.createElement("pre");
  etiqueta.innerHTML = valor;
  document.querySelector(elemento).appendChild(etiqueta);
};
