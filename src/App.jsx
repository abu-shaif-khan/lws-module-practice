import { useState } from "react";
import ChatRoom from "./Chatroom.jsx";

export default function App(){
  const [show, setShow] = useState(true);
    return (
      <>
      <div>
        <button onClick={() => setShow((s) => !s)}>
          {show ? "Hide" : "Show"}
        </button>
      </div>
      {show && <ChatRoom />};
    </>
    );
}


