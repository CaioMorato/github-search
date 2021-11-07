function SearchBar() {
  return (
    <div className="flex shadow-md rounded-xl mx-10 my-3">
      <div class="flex-1 lg:flex-none">
        <div class="form-control">
          <input type="text" placeholder="Search Github username..." class="input" />
        </div>
      </div>
      <div class="flex-none">
        <button class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
