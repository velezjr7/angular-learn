// const clicks = Rx.Observable.fromEvent(document, "click");

// let count = 1;
// clicks.subscribe((ev) => {
//   console.log(
//     `Click en: (${ev.clientX}, ${ev.clientY}) - Click número: ${count}`,
//   );
//   count++;
// });

// const miObservable = Rx.Observable.create((observer) => {
//   observer.next("Hola");
//   observer.next("Mundo");
// });
// const button = document.querySelector("button");
// Rx.Observable.fromEvent(button, "click").subscribe(() => {
//   miObservable.subscribe((val) => {
//     console.log(`Valor del primer observable: ${val}`);
//   });
// });

// const promesa = new Promise((resolve, reject) => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json())
//     .then((jugadores) => {
//       console.log("Promesa resuelta");
//       resolve(jugadores);
//     })
//     .catch((error) => {
//       console.log("Promesa rechazada");
//       reject(error);
//     });
// });

// const miObservable = Rx.Observable.fromPromise(promesa);

// miObservable.subscribe({
//   next: (res) => {
//     console.log("usuarios", res);
//   },
//   error: (error) => {
//     console.log("ERROR");
//     throw error;
//   },
// });
//forma moderna de hacer lo mismo con async/await y defer
// import { defer } from "rxjs";

// async function obtenerUsuarios() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
//     const usuarios = await response.json();
//     console.log("Usuarios obtenidos:", usuarios);
//   } catch (error) {
//     console.error("Error al obtener usuarios:", error);
//   }
// }

// const miObservableDefer = defer(() => obtenerUsuarios());

// miObservableDefer.subscribe({
//   next: (res) => {
//     console.log("Usuarios:", res);
//   },
//   error: (err) => {
//     console.error("Error:", err);
//   },
// });

// const boton = document.querySelector("button");

// boton.disabled = true;

// const timer = Rx.Observable.timer(2000);

// timer.subscribe(() => {
//   boton.disabled = false;
// });

// forma moderna de hacer lo mismo con timer y subscribe
// import { timer } from 'rxjs';

// const boton = document.querySelector("button");
// boton.disabled = true;

// const temporizador$ = timer(2000);

// temporizador$.subscribe({
//   next: () => {
//     boton.disabled = false;
//     console.log("Botón habilitado");
//   },
//   complete: () => {
//     console.log("Observable completado");
//   }
// });

// const boton = document.querySelector("button");

// boton.disabled = true;

// const intervalo = Rx.Observable.interval(2000);

// intervalo.subscribe((i) => {
//   boton.disabled = !boton.disabled;
//   console.log(i);
// });

// forma moderna de hacer lo mismo con interval y subscribe
// import { interval } from "rxjs";

// const boton = document.querySelector("button");
// boton.disabled = true;

// const intervalo$ = interval(2000);

// intervalo$.subscribe({
//   next: (i) => {
//     boton.disabled = !boton.disabled;
//   },
//   error: (err) => {
//     console.error("Error:", err);
//   },
//   complete: () => {
//     console.log("Observable completado");
//   },
// });

// const miObservable = Rx.Observable.of(
//   "Hola",
//   "Mundo",
//   [1, 2, 3, 4],
//   ["a", [1, "b"]],
//   true,
//   {
//     fav: "kikines",
//   },
// );

// miObservable.subscribe({
//   next: (v) => {
//     console.log(v);
//   },
//   error: (err) => {
//     console.error(err);
//   },
//   complete: () => {
//     console.log("observable completo");
//   },
// });
// forma moderna
// import { of } from 'rxjs';

// const miObservable = of(
//   "Hola",
//   "Mundo",
//   [1, 2, 3, 4],
//   ["a", [1, "b"]],
//   true,
//   {
//     fav: "kikines",
//   }
// );

// miObservable.subscribe({
//   next: (v) => {
//     console.log(v);
//   },
//   error: (err) => {
//     console.error(err);
//   },
//   complete: () => {
//     console.log("observable completo");
//   }
// });

// const boton = document.querySelector("button");

// const intervalo = Rx.Observable.interval(2000);
// boton.disabled = true;

// const datos = intervalo.subscribe((i) => {
//   boton.disabled = !boton.disabled;
//   console.log(i);
// });

// Rx.Observable.fromEvent(boton, "click").subscribe(() => {
//   console.log("onClick", "Se ha pulsado el botón");
//   datos.unsubscribe();
// });
// const clicks = Rx.Observable.fromEvent(document, "click");

// let count = 0;

// const datos = clicks.subscribe((click) => {
//   count++;
//   console.log(
//     `Click en: ${click.clientX} ${click.clientY}. Click numero ${count}`,
//   );
//   if (count === 5) {
//     datos.unsubscribe();
//   }
// });

const boton = document.querySelector("button");

boton.disabled = true;

const timer = Rx.Observable.timer(3000);

timer.subscribe({
  next: () => {
    boton.disabled = false;
    console.log("El botón se ha habilitado nuevamente");
  },
  error: () => {},
  complete: () => {
    console.log("Adiós desde la subscripción");
  },
});
