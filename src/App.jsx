
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
const name = "Yassine";
const cognome = "El Kharmoudi";

const userDetail = {
  name,
  cognome
};

const user = {
  ...userDetail,
  //cognome:"Tomaso"
};

return (
  <div>
    <h3>
      Benvenuto nella mia pagina Web di: {user.name} - {user.cognome}
    </h3>
  </div>
);

  // return (
  //   <div>
  //     <h3>benvenuto nella mia pagina Web di : {user.name}{user.cognome} </h3>

  //     <p>Count: {count}</p>

  //     <button onClick={() => setCount(count + 1)}>
  //       Incrementa
  //     </button>
  //   </div>
  // );
}

export default App;