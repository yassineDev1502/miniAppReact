
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
const name = "Yassine";
const cognome = "El Kharmoudi";
const user = [
  { id: 1, name: "Mario" },
  { id: 2, name: "Luca" },
  { id: 3, name: "Anna" }
];

const userDetail = {
  name,
  cognome
};

// const user = {
//   ...userDetail,
//   //cognome:"Tomaso"
// };

return (
  <div>
    <h3>
      Benvenuto nella mia pagina Web di: {user.name} - {user.cognome}
    </h3>
    <ul>
      {
        user.map(x=>(
      <li key={x.id}>
        {x.name}
      </li>
     ))
    }
    </ul>
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