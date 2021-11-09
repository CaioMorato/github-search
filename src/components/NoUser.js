// vitals
import { useContext } from 'react';
import MyContext from '../context/MyContext';
// components
import { themeToggleText } from '../helpers/themeToggle';

function NoUser() {
  const { darkTheme } = useContext(MyContext);
  return (
    <section className="text-center my-12">
      <h3 className={`${themeToggleText(darkTheme)} logo font-bold`}>Digite um nome de usuário</h3>
    </section>
  );
}

export default NoUser;
