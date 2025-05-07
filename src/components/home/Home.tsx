import { YOUTUBE_GET_TOP_TRENDING } from "../../utils/constants/urls";
import VideoList from "../videoList/videoList";
import { setVideData } from "../../redux/slices/videoListSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/reduxHook";
import ButtonList from "../buttonList/ButtonList";

const Home = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.videoList);

  const fetchYoutubeData = async () => {
    const res = await fetch(YOUTUBE_GET_TOP_TRENDING);
    const data = await res.json();
    dispatch(setVideData(data?.items));
  };

  useEffect(() => {
    fetchYoutubeData();
  }, []);

  return (
    <>
      <ButtonList />
      <VideoList title="Trending" videoData={state?.videos} />
    </>
  );
};

export default Home;
