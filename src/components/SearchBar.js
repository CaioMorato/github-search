import { useContext, useState } from 'react';
import MyContext from '../context/MyContext';

function SearchBar() {
  const [inputText, setInputText] = useState('');
  const { setSearchText } = useContext(MyContext);

  const handleClick = () => {
    setSearchText(inputText);
  };

  const handleKeyPress = (evt) => {
    if (evt.code === 'Enter') {
      handleClick();
    }
  };

  return (
    <div className="flex shadow-md rounded-xl mx-10 my-3">
      <div className="flex-1">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search Github username..."
            className="input"
            onChange={({ target }) => setInputText(target.value)}
            onKeyPress={(evt) => handleKeyPress(evt)}
          />
        </div>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost" type="button" onClick={() => handleClick()}>
          Search
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className={`${
              darkTheme ? 'text-base-200' : 'text-base-contet'
            } inline-block w-6 h-6 stroke-current`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg> */}
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
