import logo from './logo.svg';
import './styles/avatar.css';


import Letreiro from './components/Letreiro';
import Relogio from './components/Relogio';
import MyApp from './components/myapp';
import AboutPage from './components/myapp';
import Profile from './components/Profile';
import ContadorDePessoas from './components/ContadorPessoas';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>

        </header>
      </div>
      <Letreiro />
      <hr></hr>
      <Relogio />
      <hr></hr>
      <MyApp />
      <hr></hr>
      <Profile/>
      <hr></hr>
      <ContadorDePessoas/>
      <hr></hr>
      
    </>
  );
}

export default App;
