import { useContext } from 'react';
import MyContext from '../context/MyContext';

function UserStats(data) {
  const { userData } = useContext(MyContext);
  return (
    <div className="user-stats rounded-xl flex items-center justify-between shadow-lg p-4 my-5">
      <div>
        <h3>Repos</h3>
        <p className="text-center font-bold">{userData.public_repos}</p>
      </div>
      <div>
        <h3>Followers</h3>
        <p className="text-center font-bold">{userData.followers}</p>
      </div>
      <div>
        <h3>Following</h3>
        <p className="text-center font-bold">{userData.following}</p>
      </div>
    </div>
  );
}

export default UserStats;
