import App from "./App";
import { modInverse, solve } from "./Component/EquationArea";
import Result from "./Component/Result";
import renderer from 'react-test-renderer';

test('modInverse', () => {
  expect(modInverse(77,5)).toBe(3);
  expect(modInverse(55,7)).toBe(6);
  expect(modInverse(35,11)).toBe(6);
});

let eq = [{id: 0, a: 3, n: 5},{id: 1, a: 5, n: 7},{id: 2, a: 7, n: 11}];
let res = solve(eq);
let N = res.n;
let MList = res.MList;
let yList = res.yList;
let result = res.res % N;

test('solve', () => {
  expect(result).toBe(348);
  expect(N).toBe(385);
  expect(MList).toStrictEqual([77, 55, 35]);
  expect(yList).toStrictEqual([3, 6, 6]);
});

test("render App without crashing", () => {
  const component = renderer.create(
    <App/>
  );
});

test("render Result without crashing", () => {
  const component = renderer.create(
    <Result eq={eq} res={result} N={N}/>
  );
  let tree = component.toJSON();
  expect(tree.children[1].children.filter((elmt => elmt.type !== 'li'))[0].children[1]).toBe("348");
  expect(tree.children[1].children.filter((elmt => elmt.type !== 'li'))[0].children[3]).toBe("385");
});