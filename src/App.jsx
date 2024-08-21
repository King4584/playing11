import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [players, setPlayers] = useState([]);
  // const [finalPlayer, setFinalPlayers] = useState([]);

  const handleClick = () => {
    setPlayers((prev) => {
      return [...prev, name];
    });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen ">
        <div className="text-white font-serif w-1/2">
          <input
            className="m-2 p-2 border-t-white rounded-2xl"
            name="players"
            type="text"
            placeholder="Enter player name"
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="m-2 p-2 px-4 bg-slate-500 rounded-2xl"
            type="submit"
            onClick={handleClick}
          >
            Add
          </button>
        </div>
        <div>
          {players.length > 0 ? (
            <>
              <h3 className="m-4 ">Master Team</h3>
              <ul>
                {players.map((el, index) => {
                  return (
                    <li key={index}>
                      <span className="p-2"> {el}</span>
                      <button className="p-2 m-2 bg-slate-600 rounded-lg">
                        Add
                      </button>
                      <button className="p-2 m-2 bg-slate-600 rounded-lg">
                        Delete
                      </button>
                    </li>
                  );
                })}
              </ul>{" "}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
