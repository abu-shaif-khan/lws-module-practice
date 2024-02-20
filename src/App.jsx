import { useState } from "react";
import "./App.css";
import CatFriends from "./components/CatFriends";
export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      {show && <CatFriends />}
      <br />
      <button onClick={() => setShow((s) => !s)}>
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}
