
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Lista Numweri</h1>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Incrementa
      </button>
    </div>
  );
}

export default App;