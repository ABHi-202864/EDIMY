import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useState } from "react";

const SearchBar = ({ data }) => {
  const [input, setInput] = useState(data ? data : "");

  const navigate = useNavigate();

  const onSearchHandler = (e) => {
    e.preventDefault();
    navigate("/course-lis/" + input);
  };

  return (
    <form
      onSubmit={onSearchHandler}
      className="max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded"
    >
      <img src={assets.search_icon} alt="search_icon" className="md:w-auto w-10 px-3" />
      <input
        className="w-full h-full outline-none text-gray-500/80"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
        placeholder="Search for courses"
      />
      <button
        type="submit"
        className="bg-blue-600 rounded cursor-pointer text-white md:px-10 px-7 md:py-3 py-2 mx-1"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
