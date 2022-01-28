import React, { useState } from "react";
import Button from "@mui/material/Button";

const Foo = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((currentCount) => currentCount + 1);

  const handleDecrement = () => setCount((currentCount) => currentCount - 1);

  return (
    <div>
      <h1>{count}</h1>
      <Button
        variant="outlined"
        size="medium"
        type="button"
        onClick={handleIncrement}
      >
        Increment
      </Button>
      <Button
        variant="outlined"
        size="medium"
        type="button"
        onClick={handleDecrement}
      >
        Decrement
      </Button>
    </div>
  );
};

export default Foo;
