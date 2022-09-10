import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import PiePagina from './components/Footer/PiePagina';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <>
      <NavBar/>
      
      <ItemDetailContainer/>
      <br/>
      <PiePagina/>
    </>
    
  );
}

export default App;
