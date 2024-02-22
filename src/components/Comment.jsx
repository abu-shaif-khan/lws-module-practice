import { useEffect, useState } from "react";
import fetchComment from "../utils/fetchComment";

export default function Comment({postId}) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    let ignore = false;
    async function startFetching() {
        const json = await fetchComment(postId);

        if (!ignore) {
            setComments(json);
        }
    }

    startFetching();
    return () => {
        ignore = true;
    };
}, [postId]);
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.name}</li>
      ))}
    </ul>
  );
}
