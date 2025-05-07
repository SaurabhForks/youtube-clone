import { useParams } from "react-router";

const WatchVideo = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <iframe
        className="w-[100%] h-[80vh]"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default WatchVideo;
