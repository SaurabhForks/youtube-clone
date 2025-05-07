import { useState } from "react";
import classes from "./ButtonList.module.scss";

const ButtonList = () => {
  const [isActiveButton, setIsActiveButton] = useState("All");
  const buttons = ["All", "Music", "Movies", "Games", "Series"];
  const handleButtonClick = (button: string) => {
    setIsActiveButton(button);
  };

  return (
    <ul className="flex justify-baseline align-middle gap-1 py-3">
      {buttons.map((button) => (
        <li
          key={button}
          className={`button rounded-[8px] border-1 min-w-15 p-1 hover:bg-black hover:text-white ${
            isActiveButton == button ? classes.active : ""
          } cursor-pointer ${classes.button}`}
          onClick={() => handleButtonClick(button)}
        >
          {button}
        </li>
      ))}
    </ul>
  );
};

export default ButtonList;
