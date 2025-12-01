import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState("");

  const calcular = (operacion) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado("Por favor ingresa números válidos.");
      return;
    }

    if (operacion === "dividir" && n2 === 0) {
      setResultado("Error: no se puede dividir por cero.");
      return;
    }

    let res = "";

    switch (operacion) {
      case "sumar":
        res = n1 + n2;
        break;
      case "restar":
        res = n1 - n2;
        break;
      case "multiplicar":
        res = n1 * n2;
        break;
      case "dividir":
        res = n1 / n2;
        break;
      default:
        res = "";
    }

    setResultado("Resultado: " + res);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Calculadora Básica en React</h2>

      <input
        type="number"
        placeholder="Número 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Número 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <button onClick={() => calcular("sumar")}>Sumar</button>
      <button onClick={() => calcular("restar")}>Restar</button>
      <button onClick={() => calcular("multiplicar")}>Multiplicar</button>
      <button onClick={() => calcular("dividir")}>Dividir</button>

      <br /><br />

      <h3>{resultado}</h3>
    </div>
  );
}

export default App;
