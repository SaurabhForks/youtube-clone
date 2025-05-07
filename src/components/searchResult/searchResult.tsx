import { useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../../utils/constants/urls";
import { useParams } from "react-router";
import { setSearchResult } from "../../redux/slices/videoListSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/reduxHook";
import VideoList from "../videoList/videoList";

const SearchResult = () => {
  const state = useAppSelector((state) => state.videoList);

  const { query } = useParams();

  const dispatch = useAppDispatch();

  const handleVideoSearch = async (searchInput: string | undefined) => {
    const respose = await fetch(YOUTUBE_SEARCH_API + searchInput);
    const result = await respose.json();
    dispatch(setSearchResult(result?.items));
  };

  useEffect(() => {
    handleVideoSearch(query);
  }, [query]);

  return (
    <div>
      <VideoList title="Search Result" videoData={state?.serachResult} />
    </div>
  );
};

export default SearchResult;
