import './App.css'

function App() {
  return (  
    <div className="App">
      <div className="background">
      <div className="box">
        <div className="transparent-box">
          <div className="logo"/>
          <input type="email"className="input-email" placeholder="Email" />
          <input type="password" className="input-password" placeholder="Senha" />
          <button className="custom-button">Entrar</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
