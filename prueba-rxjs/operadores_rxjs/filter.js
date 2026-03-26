const { from, of } = rxjs;
const { filter } = rxjs.operators;

const promesa = new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => resolve(data.json()))
    .catch((error) => reject(error));
});

const obsPromise$ = from(promesa).pipe(
  filter((user) => {
    return user.length > 8;
  }),
);

obsPromise$.subscribe({
  next: (users) => {
    console.log("--->", users);
  },
  error: (error) => {
    console.error(error);
  },
  complete: () => {
    console.log("Fin");
  },
});

const miObservable$ = of("Hola Mundo", ["Dato", 123], 23, 1994, {
  fav: "star_selected",
}).pipe(filter((tipo) => isNaN(tipo)));

miObservable$.subscribe({
  next: (val) => {
    console.log("Final: ", val);
  },
  error: (error) => {
    console.log(error);
  },
  complete: () => {
    console.log("adios desde el segundo observable");
  },
});
