let array = [
  {
    id: 1,
    name: "barilla",
    kcal: 330,
    protein: 5,
    carbo: 45,
    fat: 0,
    portion: 100,
    created: "2020-04-15T01:54:06.000Z"
  },
  {
    id: 2,
    name: "kasza",
    kcal: 340,
    protein: 14,
    carbo: 32,
    fat: 2,
    portion: 100,
    created: "2020-04-15T01:54:06.000Z"
  },
  {
    id: 3,
    name: "marcheweka",
    kcal: 15,
    protein: 1,
    carbo: 12,
    fat: 1,
    portion: 100,
    created: "2020-04-15T01:54:06.000Z"
  },
  {
    id: 4,
    name: "jab?ko",
    kcal: 20,
    protein: 2,
    carbo: 13,
    fat: 1,
    portion: 100,
    created: "2020-04-15T01:54:06.000Z"
  },
  {
    id: 5,
    name: "ziemniaki",
    kcal: 35,
    protein: 3,
    carbo: 14,
    fat: 1,
    portion: 100,
    created: "2020-04-15T01:54:06.000Z"
  },
  {
    id: 6,
    name: "cukinia",
    kcal: 18,
    protein: 4,
    carbo: 15,
    fat: 1,
    portion: 100,
    created: "2020-04-15T01:54:06.000Z"
  },
  {
    id: 7,
    name: "wo?owina",
    kcal: 350,
    protein: 18,
    carbo: 4,
    fat: 15,
    portion: 100,
    created: "2020-04-15T01:54:06.000Z"
  },
  {
    id: 8,
    name: "indyk",
    kcal: 280,
    protein: 12,
    carbo: 3,
    fat: 8,
    portion: 100,
    created: "2020-04-15T01:54:06.000Z"
  },
  {
    id: 9,
    name: "kurczak",
    kcal: 279,
    protein: 11,
    carbo: 2,
    fat: 7,
    portion: 100,
    created: "2020-04-15T01:54:06.000Z"
  },
  {
    id: 10,
    name: "wieprzowina",
    kcal: 330,
    protein: 16,
    carbo: 4,
    fat: 10,
    portion: 100,
    created: "2020-04-15T01:54:06.000Z"
  },
  {
    id: 11,
    name: "mleko",
    kcal: 65,
    protein: 8,
    carbo: 4,
    fat: 3,
    portion: 100,
    created: "2020-04-15T01:54:06.000Z"
  },
  {
    id: 12,
    name: "woda",
    kcal: 0,
    protein: 0,
    carbo: 0,
    fat: 0,
    portion: 100,
    created: "2020-04-15T01:54:06.000Z"
  },
  {
    id: 13,
    name: "coca cola",
    kcal: 43,
    protein: 0,
    carbo: 11,
    fat: 0,
    portion: 100,
    created: "2020-04-15T01:54:06.000Z"
  }
];
//

let j = Object.keys(array).length;
let js = [];
let jss = [""];
console.log(j);
for (i = 0; i < j; i++) {
  console.log(array[i].id + array[i].name);
  jss = js.push(array[i].name);
}
console.log(jss);
