import { useState } from "react";

function App() {
  const [background, setBackground] = useState("bg-gray-200");
  return (
    <div
      className={`${background} bg-gray-200 w-screen h-screen flex justify-center items-center gap-3`}
    >
      <button
        onClick={() => {
          setBackground("bg-blue-400");
        }}
        className="bg-white text-black text-2xl font-semibold px-6 py-1 rounded-md"
      >
        {"Blue"}
      </button>
      <button
        onClick={() => {
          setBackground("bg-red-400");
        }}
        className="bg-white text-black text-2xl font-semibold px-6 py-1 rounded-md "
      >
        {"Red"}
      </button>
    </div>
  );
}

export default App;
