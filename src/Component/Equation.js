import '../CSS/Equation.css';

const Equation = ({elmt, num, updateEquation}) => {

  const aValueInputHandler = (e) => {
    updateEquation({id: num, a: e.target.value, n: null});
  }

  const nValueInputHandler = (e) => {
    updateEquation({id: num, a: null, n: e.target.value});
  }

  return (
    <div className="Equation">
      <p>x ≡ a <sub>{num+1}</sub>	(mod m<sub>{num+1}</sub>)</p>
      <form>
        <label htmlFor="aValue">a<sub>{num+1}</sub></label>
        <input id="aValue" type="number" onWheel={(e) => e.target.blur()} value={elmt.a} onChange={aValueInputHandler}/>
        <label htmlFor="nValue">m<sub>{num+1}</sub></label>
        <input id="nValue" type="number" onWheel={(e) => e.target.blur()} value={elmt.n} onChange={nValueInputHandler}/>
      </form>
    </div>
  )
}

export default Equation;