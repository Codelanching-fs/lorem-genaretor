import React, { useState } from "react";
import Data from "./Data.js";
const App = () => {
  const [ival, setival] = useState(0);
  const [text, settext] = useState([]);

  const formhandler = e => {
    e.preventDefault();
    let amount = ival;
    if (amount < 0) {
      amount = 1;
    }
    if (amount >= 8) {
      amount = 8;
    }
    settext(Data.slice(0, amount));
  };

  return (
    <>
      <h2>Tried of Boring Lorem ipsum?</h2>
      <form onSubmit={formhandler}>
        <input
          type="number"
          name="amount"
          id="amount"
          value={ival}
          onChange={e => {
            setival(e.target.value);
          }}
        />
        <button type="submit">Generate</button>
      </form>
      {text.map((dd, index) => {
        return <p key={index}>{dd}</p>;
      })}
    </>
  );
};

export default App;
