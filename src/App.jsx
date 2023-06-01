// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// import { useState } from 'react'
// import './App.css'
// import Card from './Components/Card'
// import Form from './Components/Form'

// function App() {
//   const [user, setUser] = useState({
//     name: '',
//     color: '',
//   })
//   const [show, setShow] = useState(false)


//   return (
//     <div className="App">
//       <Form setShow={setShow} user={user} setUser={setUser} />
//       { show  && <Card name={user.name} color={user.color}/> }
//     </div>
//   )
// }

// export default App
import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleChangeName = (event) => {
    const value = event.target.value;
    setName(value);
    setIsValid(value.length >= 3 && value.length <= 10);
  };

  const handleChangeColor = (event) => {
    const value = event.target.value.toLowerCase();
    setColor(value);
  };

  return (
    <div className="App">
      <h1>Ingresa tus datos</h1>
      <form>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={handleChangeName}
          />
          {!isValid && (
            <p className="error">El nombre debe tener entre 3 y 10 letras</p>
          )}
        </div>
        <div>
          <label>Color favorito:</label>
          <input
            type="text"
            value={color}
            onChange={handleChangeColor}
          />
        </div>
      </form>
      {color && (
        <div
          className="color-box"
          style={{ backgroundColor: color }}
        >
          Tu color favorito {name} es el {color} .
        </div>
      )}
    </div>
  );
}

export default App;
