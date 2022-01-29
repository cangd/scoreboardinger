import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const Score = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((currentCount) => currentCount + 1);

  const handleDecrement = () => setCount((currentCount) => currentCount - 1);

  return (
    <div>
      <div className="scoreCount">{count}</div>

      <ButtonGroup variant="text" aria-label="outlined primary button group">
        <Button size="large" onClick={handleIncrement}>
          +
        </Button>
        <Button size="large" type="button" onClick={handleDecrement}>
          -
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Score;
