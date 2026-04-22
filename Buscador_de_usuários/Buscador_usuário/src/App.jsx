import React, {useState, useEffect, use} from 'react'
import './App.css'

function App() { 
  
// Estados
  const [search, setSearch] = useState(""); // texto digitado
  const [users, setUsers] = useState([]); // lista de usuários 
  const [load, setLoad] = useState(false);  // loading
  const [error, setError] = useState(""); // mensagem de erro

  //Função de busca

  const searchUsers = async () => {
    // logica do fetch
  }

  return (
    <div>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={searchUsers}>Buscar</button>
      
      {/* mostrar loading */}
      {load && <p>Carregando...</p>}

       {/*mostrar erro  */}
      {error && <p>{error}</p>}

      {/* mostrar lista de usuarios */}
      {users.map((users) => (
        <div key={users.id}>
          <p>{users.login}</p>
          <img src={users.avatar_url} alt={users.login} width="50" />
        </div>
      ))}
    </div>
  )
}

export default App
