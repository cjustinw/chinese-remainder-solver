import '../CSS/Solution.css';

const Solution = ({ eq, res, N, MList, yList }) => {
  
  return (
    <div className="Solution">
      {/* <p id="result">Solution</p> */}
      <div className="Solution-step">
        <p className="title">General form</p>
        <div className="step">
          <p>x = a<sub>1</sub>M<sub>1</sub>y<sub>1</sub> + a<sub>2</sub>M<sub>2</sub>y<sub>2</sub> + ... + a<sub>n</sub>M<sub>n</sub>y<sub>n</sub> </p>
        </div>
      </div>
      <div className="Solution-step">
        <p className="title">Step 1 : Calculate M, product of all modulus</p>
        <div className="step">
          <p>M = 
            {eq.map((elmt,i) => (
              <> m<sub>{i+1}</sub> {i !== eq.length-1 ? <>⋅</> : ''}</>
            ))}
          </p>
          <p>M = 
            {eq.map((elmt,i) => (
              <> {elmt.n} {i !== eq.length-1 ? <>⋅</> : ''}</>
            ))}
          </p>
          <p>M = {N}</p>
        </div>
      </div>
      <div className="Solution-step">
        <p className="title">Step 2 : Calculate M<sub>i</sub>, product of all modulus except m<sub>i</sub></p>
        <div className="step">
          {MList.map((elmt, i) => (
            <p>M<sub>{i+1}</sub> = {elmt}</p>
          ))}
        </div>
      </div>
      <div className="Solution-step">
        <p className="title">Step 3 : Calculate y<sub>i</sub>, inverse M<sub>i</sub> in modulus m<sub>i</sub></p>
        <div className="step">
          {yList.map((elmt, i) => (
            <p>y<sub>{i+1}</sub> = {elmt}  →  {MList[i]} ⋅ {elmt} ≡ 1 (mod {eq[i].n})</p>
          ))}
        </div>
      </div>
      <div className="Solution-step">
        <p className="title">Step 4 : Calculate result</p>
        <div className="step">
          <p>x = 
            {eq.map((elmt,i) => (
              <> a<sub>{i+1}</sub>M<sub>{i+1}</sub>y<sub>{i+1}</sub> {i !== eq.length-1 ? <>+</> : ''}</>
            ))}
          </p>
          <p>x = 
            {eq.map((elmt,i) => (
              <> ({elmt.a})({MList[i]})({yList[i]}) {i !== eq.length-1 ? <>+</> : ''}</>
            ))}
          </p>
          <p>x ≡ {res} (mod {N})</p>
        </div>
      </div>
    </div>
  )
}

export default Solution;