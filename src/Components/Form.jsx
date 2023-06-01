// import React, { useState } from 'react'

// const Form = ({setShow, user, setUser}) => {

//     const [err, setErr] = useState(false)

    
//   const handleSubmit = (event) => {
//     event.preventDefault()
//     if(user.name.length > 2 && user.color.length > 5 && user.name.indexOf(" ") !== 0){ //user.name[0] !== " "
//       setShow(true)
//       setErr(false)
//     } else {
//       setErr(true)
//       setShow(false)
//     }
//   }

//   return (
//     <div>
//         <form onSubmit={handleSubmit}>
//             <label>Ingrese su nombre:</label>
//             <input type="text" onChange={(event) => setUser({...user, name: event.target.value})}/>
//             <label>Ingrese su color favorito:</label>
//             <input type="text" onChange={(event) => setUser({...user, color: event.target.value})}/>
//             <button>Enviar</button>
//         </form>
//         {err && <h3>Por favor chequea que la información sea correcta</h3>}
//     </div>
//   )
// }

// export default Form