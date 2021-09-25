
var a = character(
  '..###..' +
  '.#...#.' +
  '##...##' +
  '#######' +
  '##...##' +
  '##...##' +
  '##...##'
);
var b = character(
  '######.' +
  '##....#' +
  '##...##' +
  '##.###.' +
  '##...##' +
  '##....#' +
  '#######'
);
var c = character(
  '#######' +
  '##.....' +
  '##.....' +
  '##.....' +
  '##.....' +
  '##.....' +
  '#######'
);
var d = character(
  '#####..' +
  '##...#.' +
  '##....#' +
  '##....#' +
  '##....#' +
  '##...#.' +
  '#####..'
);

let net = new brain.NeuralNetwork();
net.train([{
    input: a,
    output: {
      a: 1
    }
  },
  {
    input: b,
    output: {
      b: 1
    }
  },
  {
    input: c,
    output: {
      c: 1
    }
  },
  {
    input: d,
    output: {
      d: 1
    }
  }
], {
  log: detail => console.log(detail)
});

//Aquí, podemos insertar el número que deseamos reconozca
const respuesta = brain.likely(character(
  '#####..' +
  '##...#.' +
  '##....#' +
  '##....#' +
  '##.....' +
  '##.....' +
  '#####..'
  
), net);

alert ("Opciones :"+
"1) A " +
"2) B " +
"3) C " +
"4) D " +
" Repuesta --->La Letra es: " + respuesta);

function character(string) {
  return string
    .trim()
    .split('')
    .map(integer);
}

function integer(character) {
  if ('#' === character) return 1;
  return 0;
}












