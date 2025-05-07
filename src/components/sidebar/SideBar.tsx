import "./SideBar.scss";
type Props = {};

const SideBar = (props: Props) => {
  return (
    <div className="w-[20%] px-3 side-wrap shadow-2xl bg-black text-white fixed top-0 left-0">
      <div className="section text-left">
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Subscription</li>
        </ul>
      </div>
      <div className="section text-left">
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Subscription</li>
        </ul>
      </div>
      <div className="section text-left">
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Subscription</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
