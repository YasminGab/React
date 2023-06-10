import { useState, useEffect } from "react";

export default function Calculadora() {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);
  const [error, setError] = useState(false);

  const inputNum = (e) => {
    if (curState.includes(".") && e.target.innerText === ".") return;

    if (total) {
      setPreState("");
    }

    curState
      ? setCurState((prev) => prev + e.target.innerText)
      : setCurState(e.target.innerText);
    setTotal(false);
    setError(false);
  };

  useEffect(() => {
    setInput(curState);
  }, [curState]);

  useEffect(() => {
    setInput("0");
  }, []);

  const operatorType = (e) => {
    setTotal(false);
    setOperator(e.target.innerText);
    if (curState === "") return;
    if (preState !== "") {
      equals();
    } else {
      setPreState(curState);
      setCurState("");
    }
  };

  const equals = () => {
    let cal;
    switch (operator) {
      case "/":
        if (parseFloat(curState) === 0) {
          setError(true);
          return;
        }
        cal = String(parseFloat(preState) / parseFloat(curState));
        break;
      case "+":
        cal = String(parseFloat(preState) + parseFloat(curState));
        break;
      case "X":
        cal = String(parseFloat(preState) * parseFloat(curState));
        break;
      case "-":
        cal = String(parseFloat(preState) - parseFloat(curState));
        break;
      default:
        return;
    }
    setInput("");
    setPreState(cal);
    setCurState("");
  };

  const minusPlus = () => {
    if (curState.charAt(0) === "-") {
      setCurState(curState.substring(1));
    } else {
      setCurState("-" + curState);
    }
  };

  const percent = () => {
    preState
      ? setCurState(String((parseFloat(curState) / 100) * preState))
      : setCurState(String(parseFloat(curState) / 100));
  };

  const reset = () => {
    setPreState("");
    setCurState("");
    setInput("0");
    setError(false);
  };

  return (
    <div className="containerCalculadora">
      <div className="caixaCalculadora">
        <div className="visorCalculadora">
          {error ? (
            "Erro"
          ) : input !== "" || input === "0" ? (
            input
          ) : (
            preState
          )}
        </div>

        <div className="botao  claro" onClick={reset}>
          AC
        </div>
        <div className="botao  claro" onClick={minusPlus}>
          +/-
        </div>
        <div className="botao  claro" onClick={percent}>
          %
        </div>
        <div className="botao colorido" onClick={operatorType}>
          /
        </div>
        <div className="botao " onClick={inputNum}>
          7
        </div>
        <div className="botao " onClick={inputNum}>
          8
        </div>
        <div className="botao " onClick={inputNum}>
          9
        </div>
        <div className="botao colorido" onClick={operatorType}>
          X
        </div>
        <div className="botao " onClick={inputNum}>
          4
        </div>
        <div className="botao " onClick={inputNum}>
          5
        </div>
        <div className="botao " onClick={inputNum}>
          6
        </div>
        <div className="botao colorido" onClick={operatorType}>
          +
        </div>
        <div className="botao " onClick={inputNum}>
          1
        </div>
        <div className="botao " onClick={inputNum}>
          2
        </div>
        <div className="botao " onClick={inputNum}>
          3
        </div>
        <div className="botao colorido" onClick={operatorType}>
          -
        </div>
        <div className="botao  zero" onClick={inputNum}>
          0
        </div>
        <div className="botao " onClick={inputNum}>
          .
        </div>
        <div className="botao " onClick={equals}>
          =
        </div>
      </div>
    </div>
  );
}


