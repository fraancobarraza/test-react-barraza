import './App.css';
import NavBar from './components/NavBar/NavBar'
import CardList from './components/CardList/CardList'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <CardList title={'Quesos Cremosos'}/>
      <CardList title={'Queso Muzzarella y Tybo'}/>
    </div>
  );
}

export default App;
