// components
import { useContext } from 'react';
import DataCard from './components/DataCard';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MyContext from './context/MyContext';

function App() {
  const { userData } = useContext(MyContext);
  return (
    <main>
      <Header />
      <SearchBar />
      <DataCard />
      {/* {userData ? DataCard : 'Digite um usuário'} */}
    </main>
  );
}

export default App;
