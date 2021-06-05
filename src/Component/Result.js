import '../CSS/Result.css';

const Result = ({ eq, res, N }) => {
  
  return (
    <div className="Result">
      <p id="result">Result</p>
      <div className="Result-equation">
        {eq.map((elmt) => <li key={elmt.id}> x	≡ {elmt.a} (mod {elmt.n})</li>)}
        {!isNaN(res) ? <p>x ≡ {res} (mod {N})</p> : <p>No solution!</p>}
      </div>
    </div>
  )
}

export default Result;