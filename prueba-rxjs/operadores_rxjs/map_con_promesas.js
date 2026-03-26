const { from } = rxjs;
const { tap, map } = rxjs.operators;

const promesa = new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => resolve(data.json()))
    .catch((error) => reject(error));
});

const obsPromise$ = from(promesa).pipe(
  tap((users) => console.log(`tienes ${users.length} usuarios`)),
  map((users) => {
    console.log("Antes de la suscripción", users);
    users = users.filter((user) => user.id >= 1 && user.id <= 4);
    return users;
  }),
);

obsPromise$.subscribe({
  next: (data) => {
    console.log("Después de la suscripción", data);
  },
  error: (err) => {
    console.error(err);
  },
  complete: () => {
    console.log("aios amigo");
  },
});
