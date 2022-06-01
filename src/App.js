import './App.css';
import NavBar from './components/NavBar/NavBar'
import CardList from './components/CardList/CardList'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <CardList title={'Quesos Cremosos'}/>
      <CardList title={'Queso Muzzarella y Tybo'}/> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
