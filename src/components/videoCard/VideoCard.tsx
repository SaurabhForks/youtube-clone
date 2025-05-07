import { CiMenuKebab } from "react-icons/ci";
import { viewCountConversion } from "../../utils/constants/functions";
import { useNavigate } from "react-router";

type Props = {
  img: string;
  chnlLogo: string;
  title: string;
  chnlName: string;
  views: string;
  time: string;
  id: string;
};

const VideoCard = ({
  img,
  chnlLogo,
  title,
  chnlName,
  views,
  time,
  id,
}: Props) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/watch/${id}`);
  };
  return (
    <div
      className="card-wrap w-[24.5%] shadow p-2 rounded cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="thumbnail">
        <img src={img} alt="" className="thumbnail" />
      </div>
      <div className="flex py-3 align-middle">
        <p className="w-10 h-10 rounded-full bg-gray-800 pt-2 text-white min-w-10">
          {chnlLogo?.slice(0, 1)}
        </p>
        <div>
          <div className="flex align-middle">
            <h4 className="px-2 text-left ">{title}</h4>
            <CiMenuKebab className="w-10 cursor-pointer mt-1.5" />
          </div>
          <p className="text-left px-2 text-[12px] ">{chnlName}</p>
          <div className="text-left px-2 text-[12px] ">
            <span>{viewCountConversion(views)} views</span>
            <span> {time} ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
