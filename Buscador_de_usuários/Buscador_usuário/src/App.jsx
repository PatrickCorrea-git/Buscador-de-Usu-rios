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
    // 1.Ativar loading
    setLoad(true);
    // 2. Limpar erro anterior
    setError("");
    // 3.Limpar lista de usuários
    setUsers([]);

    try {
      // 4.Preparar URL da API com o termo de busca
      const response = await fetch(`https://api.github.com/search/users?q=${search}`);

      // 5.Checar se a resposta deu certo
      if (!response.ok) {
        throw new Error("Erro ao buscar usuários");
      }
      
      const data = await response.json();

    // 6. Atualizar estado de usuários
    if (data.items.length === 0) {
      setError("Nenhum usuário encontrado");
    }else {
      setUsers(data.items);
      }
    }catch (err) {
      // 7. Tratar erros
      setError(err.message || "Ocorreu um erro");
    }finally{
      // 8. Desativar loading
      setLoad(false);
    }
  };

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
