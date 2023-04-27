import logo from './logo.svg';
// import './styles/avatar.css';
import './styles/contadorPessoas.css';


import Letreiro from './components/Letreiro';
import Relogio from './components/Relogio';
import MyApp from './components/Myapp';
import AboutPage from './components/Myapp';
import Profile from './components/Profile';
import ContadorDePessoas from './components/ContadorPessoas';
import Profile1 from './aula3/Profile1';
import Gallery from './aula3/Gallery';

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
      <Profile1/>
      <hr></hr>
      <Gallery/>
      <hr></hr>

    </>
  );
}

export default App;
