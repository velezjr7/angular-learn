const { from } = rxjs;
const { map } = rxjs.operators;

const numeros$ = from([10, 100, 1000]).pipe(
  map((v) => {
    console.log(`estoy duplicando ${v}`);
    return v * 2;
  }),
);

numeros$.subscribe((dato) => console.log(dato));
