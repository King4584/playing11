import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [players, setPlayers] = useState([]);
  const [finalPlayer, setFinalPlayers] = useState([]);

  const handleClick = () => {
    if(players.indexOf(name)>= 0){
      return;
    }
    setPlayers((prev) => {
      const currentPlayer=  [...prev, name];
      currentPlayer.sort();
      return currentPlayer;
    });
  };

  const handleAddClick =(value)=>{
    if(finalPlayer.indexOf(value)>= 0){
      return;
    }
    setFinalPlayers((prev)=>{
      return[...prev,value];
    })
    
  };
  const handleDeleteClick =(value)=>{
    const players=[...finalPlayer];
    const modifiedPlayer=players.filter(el => el!==value);
    setFinalPlayers(modifiedPlayer);
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
          <h3 className="m-4 text-center">Master Team</h3>
          {players.length > 0 ? (
            <>
              <ul>
                {players.map((el, index) => {
                  return (
                    <li key={index} className="flex flex-row">
                      
                      <h6 className="p-2 mx-12  w-36 "> {el}</h6>
                      <button className="p-2 m-2  bg-slate-600 rounded-lg " onClick={()=>handleAddClick(el)}>
                        Add
                      </button>
                      <button className="p-2 m-2 bg-slate-600 rounded-lg "onClick={()=>handleDeleteClick(el)}>
                        Delete
                      </button>
                    </li>
                  );
                })}
              </ul>{" "}
            </>
          ) : (
            <h5>No Player Added </h5>
          )}
        </div>
        <div>
          <h3 className="m-4 ">Final Player Team</h3>
          {players.length > 0 ? (
            <>
              <ul>
                {finalPlayer.map((el, index) => {
                  return (
                    <li key={index}>
                      <span className="p-2"> {el}</span>
                      {/* <button className="p-2 m-2 bg-slate-600 rounded-lg " onClick={()=>handleAddClick(el)}>
                        Add
                      </button>
                      <button className="p-2 m-2 bg-slate-600 rounded-lg "onClick={()=>handleDeleteClick(el)}>
                        Delete
                      </button> */}
                    </li>
                  );
                })}
              </ul>{" "}
            </>
          ) : (
            <h5>No Player Added </h5>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
