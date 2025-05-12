import data from "../../utils/data/comments.json";
interface Reply {
  name: string;
  text: string;
  reply?: Reply;
}

export const CommentBox = ({
  name,
  text,
  reply,
}: {
  name: string;
  text: string;
  reply?: Reply;
}) => {
  console.log("reply");

  return (
    <div className="ml-2 border-l-1 mt-2 border-gray-300 p-2 drop-shadow-sm bg-white z-0">
      <div className="flex gap-1">
        <div className="w-10 h-10 rounded-full bg-gray-500 flex justify-center items-center">
          {name?.charAt(0).toUpperCase()}
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-left">{text}</p>
        </div>
      </div>

      {reply && (
        <CommentBox name={reply.name} text={reply.text} reply={reply.reply} />
      )}
    </div>
  );
};
const Comments = () => {
  return (
    <div className="comments mt-4 text-left">
      <h3 className="font-bold text-xl mb-2">User Comments</h3>
      {data?.length > 0 &&
        data.map((comment, index) => (
          <CommentBox
            key={comment.name + index}
            name={comment.name}
            text={comment.text}
            reply={comment.reply}
          />
        ))}
    </div>
  );
};

export default Comments;
