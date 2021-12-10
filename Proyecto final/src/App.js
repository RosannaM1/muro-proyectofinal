import './App.css';
import NavBar from './Componentes/NavBar';
import Muro from '../src/Componentes/Muro';

 


function App() {
 


  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>  
      </header>      
      <div id="view">
        
        <Muro/>
      </div>
    </div>
    
  );
}

export default App;
