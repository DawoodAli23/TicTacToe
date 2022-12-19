import React, { useState } from "react";
import PlayerCard from "./PlayerCard";

function App() {
  const [grid, setGrid] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [playerSwitch, setplayerSwitch] = useState(false);
  const updateState = (row, col) => {
    let copy = [...grid];
    if (!copy[row][col]) {
      copy[row][col] = playerSwitch && copy[row][col] === null ? "X" : "0";
      setplayerSwitch(!playerSwitch);
      setGrid(copy);
    }
  };
  return (
    <div className="grid h-screen place-items-center bg-black">
      <div className="grid grid-cols-3 ">
        <div className="col-span-3 flex justify-between pb-[60px]">
          <PlayerCard playerName={"Player 1"} turn={!playerSwitch} />
          <PlayerCard playerName={"Player 2"} turn={playerSwitch} />
        </div>
        {grid.map((row, i) => {
          return row.map((cell, j) => {
            return (
              <div
                onClick={() => updateState(i, j)}
                className={`flex h-[120px] w-[120px] cursor-pointer items-center justify-center border-white text-white
                ${j === 0 ? "border-r-4 " : ""}
                ${j === 2 ? "border-l-4" : ""}
                ${i === 1 ? "border-y-4" : ""}
                `}
              >
                {cell}
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}

export default App;
