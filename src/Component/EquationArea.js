import React, {useState, useRef, useEffect} from 'react';
import AddEquation from './AddEquation';
import Equation from './Equation';
import Result from './Result';
import '../CSS/EquationArea.css';

export const modInverse = (a, b) => {
  a %= b;
  for(let i = 1; i < b; i++){
    if((a*i)%b === 1) {
      return i;
    }
  }
}

export const solve = (eq) => {
  let result = 0;
  let N = 1;
  let newMList = [];
  let newYList = [];
  eq.forEach((elmt, i) => {
    let M = 1;
    eq.forEach((elmt2, j) => {
      if(j !== i){
        M *= elmt2.n
      }
    });
    let Y = modInverse(M, elmt.n);
    N *= elmt.n;
    result += elmt.a * M * Y
    newMList.push(M);
    newYList.push(Y);
  });  
  return {res: result, n: N, MList: newMList,  yList: newYList}
}

const EquationArea = ({checkSolution}) => {
  const [eq, setEq] = useState([]);
  const [result, setResult] = useState(null);
  const [N, setN] = useState(null);
  const [MList, setMList] = useState([]);
  const [yList, setYList] = useState([]);

  
  const ref1 = useRef(null);
  const scrollToResult = () => ref1.current.scrollIntoView({behavior: 'smooth'});

  const setEquation = (num) => {
    const newState = [];
    for(let i = 0; i < num; i++) {
      newState.push({id: i, a: "", n: ""});
    }
    setEq(newState);
    setResult(null);
    setN(null);
    checkSolution(false, null, null, null, null, null);
  }

  const updateEquation = (equation) => {
    let newEq = [...eq];
    if(equation.a != null){
      newEq[equation.id].a = equation.a;
    }
    else{
      newEq[equation.id].n = equation.n;
    }
    setEq(newEq);
    setResult(null);
    setN(null);
    checkSolution(false, null, null, null, null, null);
  }

  // const modInverse = (a, b) => {
  //   a %= b;
  //   for(let i = 1; i < b; i++){
  //     if((a*i)%b === 1) {
  //       return i;
  //     }
  //   }
  // }

  const solveEquation = () => {
    // let result = 0;
    // let N = 1;
    // let newMList = [];
    // let newYList = [];
    // eq.forEach((elmt, i) => {
    //   let M = 1;
    //   eq.forEach((elmt2, j) => {
    //     if(j !== i){
    //       M *= elmt2.n
    //     }
    //   });
    //   let Y = modInverse(M, elmt.n);
    //   N *= elmt.n;
    //   result += elmt.a * M * Y
    //   newMList.push(M);
    //   newYList.push(Y);
    // });  
    const res = solve(eq);
    // setResult(result%N);
    // setN(N);
    // setMList(newMList);
    // setYList(newYList);
    setResult(res.res % res.n);
    setN(res.n);
    setMList(res.MList);
    setYList(res.yList);
  }

  useEffect(() => {
    if(result != null){
      scrollToResult();
    }
  }, [result])

  return (
    <div className="EquationArea">
      <AddEquation setEquation={setEquation}/>
      {eq.map((elmt) => <Equation elmt={elmt} key={elmt.id} num={elmt.id} updateEquation={updateEquation}/>)}
      {eq.length !== 0 ? <button className="btn" onClick={solveEquation}>Calculate</button> : ''}
      {result != null ? 
        <div ref={ref1}>
          <Result eq={eq} res={result} N={N}/> 
          {!isNaN(result) ? <button className="btn" onClick={() => checkSolution(true, eq, N, result, MList, yList)}> Check Solution</button> : ''}
        </div>
      : ''}
    </div>
  );
}

export default EquationArea;