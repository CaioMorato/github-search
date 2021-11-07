import { useContext } from 'react';
import MyContext from '../context/MyContext';

function NoUser() {
  const { darkTheme } = useContext(MyContext);
  return (
    <section className="text-center my-12">
      <h3 className={`${darkTheme ? 'text-base-200' : 'text-base-contet'} logo font-bold`}>
        Digite um nome de usuário
      </h3>
    </section>
  );
}

export default NoUser;
