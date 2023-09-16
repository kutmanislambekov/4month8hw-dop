import React, { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("iiitm"));
    if (storedList) {
      setList(storedList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("iiitm", JSON.stringify(list));
  }, [list]);


  return (
    <div className="App">
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
      />
      <button onClick={() => {
        if (!list.includes(text)) {
          setList([text, ...list]);
        }
      }}>
        Click 
      </button>
      <ul>
        {
          list.map((item) => (
            <li key={item}>{item}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
