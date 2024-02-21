import { useEffect } from "react";

import { createConnection } from "./utility/chat.js";

export default function ChatRoom() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, []);
  return (
    <>
      <h1>hello world</h1>;
    </>
  );
}
