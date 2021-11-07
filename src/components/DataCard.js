// vitals
import { useContext } from 'react';
// context
import MyContext from '../context/MyContext';
// components
import convertDate from '../helpers/convertDate';
import UserStats from './UserStats';
//styles
import { MdLocationOn } from 'react-icons/md';
import { FaLink, FaTwitter } from 'react-icons/fa';
import { BsBuilding } from 'react-icons/bs';

function DataCard() {
  const { userData, darkTheme } = useContext(MyContext);

  return (
    <section
      className={`${
        darkTheme ? 'light-text-color' : 'dark-text-color'
      } rounded-xl shadow-md mx-5 my-3 flex flex-col px-7 py-6`}
    >
      <div className="avatar-presentation flex items-center justify-between">
        <div className="avatar h-max">
          <div className="mb-8 rounded-full w-24">
            <img src={userData.avatar_url} alt={`Foto do perfil do usuário ${userData.name}`} />
          </div>
        </div>
        <div className="presentation">
          <h2>{userData.name}</h2>
          <h3>@{userData.login}</h3>
          <h3>{convertDate(userData.created_at)}</h3>
        </div>
      </div>
      <div className="bio">
        <p>{userData.bio}</p>
      </div>
      <UserStats />
      <div className="bio-info">
        <div className="location-website">
          <div className="location flex my-2 items-center">
            <MdLocationOn className="mr-2" />
            {userData.location}
          </div>
          <div className="website flex my-2 items-center">
            <FaLink className="mr-2" />
            {userData.blog}
          </div>
        </div>
        <div className="twitter-enterprise">
          <div className="twitter flex my-2 items-center">
            <FaTwitter className="mr-2" />
            {userData.twitter_username}
          </div>
          <div className="enterprise flex my-2 items-center">
            <BsBuilding className="mr-2" />
            {userData.company}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DataCard;
