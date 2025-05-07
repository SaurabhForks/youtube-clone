import VideoCard from "../videoCard/VideoCard";

type Props = {
  title: string;
  videoData: Array<object>;
};

const VideoList = ({ title = "Section Title", videoData = [] }: Props) => {
  return (
    <div className="video-list-wrap font-bold">
      <h4 className="text-left">{title}</h4>
      <div className="flex flex-wrap gap-1 justify-between">
        {videoData?.map((video) => {
          return (
            <VideoCard
              img={video?.snippet?.thumbnails?.medium?.url}
              chnlLogo={video?.snippet?.channelTitle}
              title={video?.snippet?.title}
              chnlName={video?.snippet?.channelTitle}
              views={video?.statistics?.viewCount}
              time={video?.snippet?.publishedAt}
              key={video?.id?.videoId ? video?.id?.videoId : video?.id}
              id={video?.id?.videoId ? video?.id?.videoId : video?.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default VideoList;
