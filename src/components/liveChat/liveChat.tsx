import { useEffect, useState } from "react";
import { setChat } from "../../redux/slices/liveChatSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/reduxHook";
import { CommentBox } from "../comments/comments";
import { LuSendHorizontal } from "react-icons/lu";
import chats from "../../utils/data/chats.json";

const LiveChat = () => {
  const [cmnt, setCmnt] = useState<string>("");
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.liveChat);
  console.log(state);

  function getRandomComment() {
    const randomIndex = Math.floor(Math.random() * chats.length);
    return chats[randomIndex];
  }
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(setChat(getRandomComment()));
    }, 20000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (cmnt) {
      dispatch(setChat({ name: "Saaurabh", message: cmnt.trim() }));
    }
  };
  return (
    <>
      <h1>Live Chat</h1>
      <div className="h-[75vh] overflow-y-auto text-left">
        {state.chats.length > 0 &&
          state.chats.map((chat: object) => (
            <CommentBox
              name={chat?.name}
              text={chat?.message}
              key={chat?.name + chat?.message}
            />
          ))}
      </div>
      <form
        action="submit"
        className="flex gap-2 w-[100%] pl-2 py-2"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          onChange={(e) => setCmnt(e.target.value)}
          value={cmnt}
          className="border-1 rounded-sm w-[90%] p-2"
        />
        <button className="w-[10%]" type="submit">
          <LuSendHorizontal size={20} />
        </button>
      </form>
    </>
  );
};

export default LiveChat;
