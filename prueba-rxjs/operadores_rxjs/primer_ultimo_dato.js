const { of } = rxjs;
const { first, last } = rxjs.operators;

const miObservable$ = of("Hola Mundo", ["Dato 1", 123], 23, 1994, {
  fav: "star_selected",
});

const first$ = miObservable$.pipe(first()).subscribe({
  next: (data) => {
    console.log("Primer valor del observable: ", data);
  },
  error: (error) => {
    console.error(error);
  },
  complete: () => {
    console.log("Suscripción correcta al primero");
  },
});

const last$ = miObservable$.pipe(last()).subscribe({
  next: (data) => {
    console.log("Último valor del observable: ", data);
  },
  error: (error) => {
    console.error(error);
  },
  complete: () => {
    console.log("Suscripción correcta al último");
  },
});
