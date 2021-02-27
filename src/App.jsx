import React, { useState } from "react";

const App = () => {
  const [newName, setnewName] = useState("");
  const [newText, setnewText] = useState("");
  const [chirps, setChirps] = useState([
    {
      username: "John Smith",
      message: "Whats the problem",
    },
    {
      username: "Zack Afron",
      message: "Why it happen",
    },
    {
      username: "afrah moh",
      message: "how to solve it ",
    },
  ]);

  let submitChirp = () => {
    let newChirp = {
      username: newName,
      message: newText,
    };

    setChirps([...chirps, newChirp]);
    emptyInputs();
  };

  let emptyInputs = () => {
    setnewName("");
    setnewText("");
  };

  let myChirps = chirps.map((chirp, id)

  return (
          <>

          <input type="text" placeholder="Username" onChange={(e) => setnewName(e.target.value)} ></input>
       
           <input type="text"placeholder="What's your thought?" onChange={(e) => setnewText(e.target.value)} ></input>
          <button  onClick={submitChirp}> chirp it </button>
          </>
  );
};

export default App;
