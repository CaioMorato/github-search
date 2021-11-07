import { useContext } from 'react';
import MyContext from '../context/MyContext';
// styles
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

function Header() {
  const { darkTheme, setDarkTheme } = useContext(MyContext);
  return (
    <header
      className={`${
        darkTheme ? 'bg-base-content' : 'bg-base-200'
      } flex justify-between align-center p-5`}
    >
      <div>
        <h1 className={`${darkTheme ? 'text-base-200' : 'text-base-contet'} logo font-bold`}>
          Github Search
        </h1>
      </div>
      <div>
        <input type="checkbox" class="checkbox" id="chk" onClick={() => setDarkTheme(!darkTheme)} />
        <label class="label" for="chk">
          <BsFillSunFill class="fas fa-moon"></BsFillSunFill>
          <BsFillMoonFill class="fas fa-sun"></BsFillMoonFill>
          <div class="ball"></div>
        </label>
      </div>
    </header>
  );
}

export default Header;
