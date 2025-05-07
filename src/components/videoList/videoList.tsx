import VideoCard from "../videoCard/VideoCard";
import { useAppSelector } from "../../utils/hooks/reduxHook";

type Props = {
  title: string;
};

const VideoList = ({ title = "Section Title" }: Props) => {
  const data = useAppSelector((state) => state.videoList);

  return (
    <div className="video-list-wrap font-bold">
      <h4 className="text-left">{title}</h4>
      <div className="flex flex-wrap gap-1 justify-between">
        {data?.videos?.map((video) => {
          return (
            <VideoCard
              img={video?.snippet?.thumbnails?.medium?.url}
              chnlLogo={video?.snippet?.channelTitle}
              title={video?.snippet?.title}
              chnlName={video?.snippet?.channelTitle}
              views={video?.statistics?.viewCount}
              time={video?.snippet?.publishedAt}
              key={video?.id}
              id={video?.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default VideoList;
