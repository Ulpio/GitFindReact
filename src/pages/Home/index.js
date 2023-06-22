import {Header} from "../../components/Header"
import background from "../../assets/background.png"
import "./styles.css"
import ItemList from "../../components/ItemList";
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="conteudo">
        <img src={background} alt="background" className="background"/>
        <div className="info">
          <h1>Encontre um perfil Github</h1>
          <div>
            <input name="usuario" placeholder="@username"/>
            <button>Buscar</button>
          </div>
          <div className="perfil">
            <img src="https://avatars.githubusercontent.com/u/98027343?s=96&v=4" alt="Profile" className="profile"/>
            <div>
              <h3>Ulpio Netto</h3>
              <p>Descrição / Sobre mim</p>
            </div>
          </div>
            <hr/>
            <div className="repositorios">
              <h4>Repositórios</h4>
              <ItemList title="Repositórios" description="Qualquer"/><br/>
              <ItemList title="Repositórios" description="Qualquer"/><br/>
              <ItemList title="Repositórios" description="Qualquer"/><br/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
