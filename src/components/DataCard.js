// vitals
import { useContext } from 'react';
// context
import MyContext from '../context/MyContext';

function DataCard() {
  const { userData } = useContext(MyContext);
  return (
    <section className="rounded-xl shadow-md mx-10 my-3 flex">
      <div className="avatar">
        <div className="mb-8 rounded-full w-24 h-24">
          <img src={userData.avatar_url} alt={`Foto do perfil do usuário ${userData.name}`} />
        </div>
      </div>
      <div>Info</div>
    </section>
  );
}

export default DataCard;
