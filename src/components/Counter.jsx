import React, { useState, useMemo } from "react";
import Button from "@material-ui/core/Button";

function Counter() {
  const [count, setCount] = useState(0);
  const counting = useMemo(() => countingNumbers(count), [count]);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>{count}</p>

      <Button
        onClick={() => incrementCount()}
        variant="contained"
        color="secondary"
      >
        Increment
      </Button>
      <p>{counting}</p>
    </div>
  );
}
const countingNumbers = (count) => {
  for (let i = 0; i < 1000; i++) {
    count += 1;
  }
  return count;
};
export default Counter;
