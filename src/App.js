import React, {useState, useRef, useEffect} from 'react';
import EquationArea from './Component/EquationArea';
import Solution from './Component/Solution';
import './App.css'

const App = () => {
  const [showSolution, setShowSolution] = useState(false);
  const [solution, setSolution] = useState({eq: null, N: null, res:null, MList:null, yList:null});

  const ref2 = useRef(null);
  const scrollToSolution = () => ref2.current.scrollIntoView({behavior: 'smooth'});
  
  const checkSolution = (bool, newEq, newN, newResult, newMList, newYList) => {
    setShowSolution(bool);
    setSolution({eq: newEq, N: newN, res: newResult, MList: newMList, yList: newYList})
  }

  useEffect(() => {
    if(showSolution === true){
      scrollToSolution();
    }
  }, [showSolution])

  return (
    <div className="App">
      <div className="App-Title">
        <h1>Chinese Remainder Theorem Calculator</h1>
        <p>By: Christopher Justine William, 13519006</p>
      </div>
      <div className="App-EquationArea">
        <EquationArea checkSolution={checkSolution}/>
      </div>
      <div className="App-Solution">
        <div ref={ref2}>
        {showSolution ? <Solution eq= {solution.eq} res = {solution.res} N={solution.N} MList={solution.MList} yList={solution.yList}/>: ''}
        </div>
      </div>
    </div>
  );
}

export default App;
