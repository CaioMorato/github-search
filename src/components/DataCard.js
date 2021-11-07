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
      <div className="avatar-presentation flex items-center justify-between md:justify-around">
        <div className="avatar h-max md:max-w-xl">
          <div className="mb-8 rounded-full w-24 md:w-40">
            <img src={userData.avatar_url} alt={`Foto do perfil do usuário ${userData.name}`} />
          </div>
        </div>
        <div className="presentation flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col">
            <h2 className="font-bold text-2xl md:text-4xl">{userData.name}</h2>
            <a
              className="link md:text-xl"
              href={`https://github.com/${userData.login}`}
              target="_blank"
              rel="noreferrer"
            >
              @{userData.login}
            </a>
          </div>
          <h3>{convertDate(userData.created_at)}</h3>
        </div>
      </div>
      <div className="bio">
        <p>{userData.bio ? userData.bio : 'Bio not available for this profile'}</p>
      </div>
      <UserStats />
      <div className="bio-info">
        <div className="location-website">
          <div className="location flex my-2 items-center">
            <MdLocationOn className="mr-2" />
            {userData.location ? userData.location : 'Not available'}
          </div>
          <div className="website flex my-2 items-center">
            <FaLink className="mr-2" />
            <a className="link" href={`${userData.blog}`} target="_blank" rel="noreferrer">
              {userData.blog ? userData.blog : 'Not available'}
            </a>
          </div>
        </div>
        <div className="twitter-enterprise">
          <div className="twitter flex my-2 items-center">
            <FaTwitter className="mr-2" />
            {userData.twitter_username ? userData.twitter_username : 'Not available'}
          </div>
          <div className="enterprise flex my-2 items-center">
            <BsBuilding className="mr-2" />
            {userData.company ? userData.company : 'Not available'}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DataCard;
