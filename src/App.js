// components
import { useContext } from 'react';
import DataCard from './components/DataCard';
import Header from './components/Header';
import NoUser from './components/NoUser';
import SearchBar from './components/SearchBar';
import MyContext from './context/MyContext';

function cardRender(bool) {
  if (bool) {
    return <DataCard />;
  }
  return <NoUser />;
}

function App() {
  const { searchText, darkTheme } = useContext(MyContext);
  return (
    <main className={`${darkTheme ? 'bg-base-content' : 'bg-base-200'}`}>
      <Header />
      <SearchBar />
      {cardRender(searchText)}
    </main>
  );
}

export default App;
