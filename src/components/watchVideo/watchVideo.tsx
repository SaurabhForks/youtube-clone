import { useParams } from "react-router";
import Comments from "../comments/comments";
import LiveChat from "../liveChat/liveChat";

const WatchVideo = () => {
  const { id } = useParams();

  return (
    <div>
      <div className="flex justify-between items-start">
        <iframe
          className="w-[70%] h-[80vh]"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <div className="w-[30%]">
          <LiveChat />
        </div>
      </div>

      <Comments />
    </div>
  );
};

export default WatchVideo;
