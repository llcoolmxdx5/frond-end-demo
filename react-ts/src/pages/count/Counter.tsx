import React from "react";

interface IProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export default function Counter({ count, increment, decrement }: IProps) {
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  );
}
