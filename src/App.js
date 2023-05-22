import React, { useState } from 'react'
import { faker } from '@faker-js/faker';
import './App.css';

const UserList = () => {
  const [users, setUsers] = useState([])

  const handleAddUser = () => {
    const newUser = {
      name: faker.internet.userName(),
      uid: faker.datatype.uuid()
    }
    //si no utilizo el spread operator, es decir ([newUser]), cada vez que se usase el handleAddUser, estaría susituyendo el elemento de array que hay en el useState. Pero con el spread operator, estamos diciendo "coje lo que hay en el array y añadele el newUser"
    setUsers([...users, newUser])
  }

  const handleRemoveUser = (uid) => {
    // con el filter estamos creando un nuevo array (newUser), en el, se están retornando todos los elementos, diferentes al que estamos seleccionando
    const newUser = users.filter((user) => user.uid !== uid)
    //ahora no hay que hacer spread operato, porque queremos añadir el array conpleto
    setUsers(newUser)
  }

  const handleUpdateUser = (uid) => {
    //recorremos todos le array y si encontramos una igualdad, devuelveme todos lo que hemos encontrado(spread operator), pero en la igualdad, cambiame el nombre
    const newUser = users.map((user) => {
      if (user.uid === uid) {
        return {
          ...user,
          name: faker.internet.userName(),
        }
      }
      return user
    }
    )
    //cuando se haya realizado, hacer el setUsers de todos los elementos de newUser, volvemos a sustituir, porque cambiamos un array por otro
    setUsers(newUser)
  }

  return (
    <>
      <ul>
        {users.map((user) => (
          /*  <li onClick={() => handleRemoveUser(user.uid)} key={user.uid}>{user.name}</li> */
          <li onClick={() => handleUpdateUser(user.uid)} kay={user.uid}>{user.name}</li>
        ))}
      </ul>
      <button onClick={handleAddUser}>Agregar Random</button>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Usuarios aleatorios</h1>
      <UserList />
    </div>

  );
}

export default App;
