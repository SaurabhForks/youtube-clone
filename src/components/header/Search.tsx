/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GOOGLE_SUGGEST_API } from "../../utils/constants/urls";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/reduxHook";
import { setCache } from "../../redux/slices/searchCache";

type Props = {};

const Search = (props: Props) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [suggestion, setSuggestion] = useState(false);
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.searchCache);
  console.log(state);

  const handleSearch = async () => {
    const data = await fetch(GOOGLE_SUGGEST_API + searchInput);
    const result = await data.json();
    setSearchResult(result[1]);
    if (searchInput) {
      dispatch(setCache({ [searchInput]: result[1] }));
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (state.results[searchInput]) {
        setSearchResult(state.results[searchInput]);
      } else {
        handleSearch();
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [searchInput]);

  const handleVideoSearch = (value: string) => {
    console.log(value);
  };
  return (
    <div className="search-wrap w-[50%] flex items-center relative">
      <input
        type="text"
        placeholder="search"
        className="input-box text-white rounded-l-full w-[80%]"
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
        onFocus={() => setSuggestion(true)}
        onBlur={() => setSuggestion(false)}
      />
      <button className="search-button rounded-r-full" onClick={handleSearch}>
        <FaSearch color="#fff" />
      </button>
      {suggestion && (
        <ul className="absolute top-12 bg-white w-[80%] rounded-md">
          {searchResult.map((item) => (
            <li
              className="text-left p-2 hover:bg-gray-200 cursor-pointer"
              key={item}
              onClick={() => handleVideoSearch(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Search;
