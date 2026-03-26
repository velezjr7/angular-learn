const { fromEvent } = rxjs;
const { map, debounceTime } = rxjs.operators;

debounce().subscribe({
  next: (value) => {
    print("#t-output", value);
  },
});

function debounce() {
  let tInput = document.querySelector("#t-field");

  return (thObservable$ = fromEvent(tInput, "input").pipe(
    map((data) => data.target.value),
    debounceTime(2000),
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
