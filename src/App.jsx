import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [msg, setmsg] = useState("");

  const increse = () => {
    if (count > 9) {
      setmsg("You can Increse between 1 to 10");
      return;
    }
    setmsg("");
    setCount(count + 1);
  };

  const decrise = () => {
    if (count < 1) {
      setmsg("most be more than 0");
      return;
    }
    setmsg("");
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-slate-700 ">
      <div>
        <p className="font-bold text-3xl text-white">Counter: {count} </p>
      </div>
      <div className="space-x-5 mt-10">
        <button
          onClick={decrise}
          className="bg-red-500 text-white font-bold p-2 w-[100px] cursor-pointer rounded-md"
        >
          Decrise
        </button>
        <button
          onClick={increse}
          className="bg-green-500 text-white font-bold p-2 w-[100px] cursor-pointer rounded-md "
        >
          Increse
        </button>
      </div>
      <p className="text-red-500 font-bold mx-auto mt-4">{msg}</p>
    </div>
  );
}

export default App;
