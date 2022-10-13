import React, { useState, useEffect, useRef, useMemo } from "react";

const UseMemoExample = () => {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  //const sqrt = getSqrt(number);
  const sqrt = useMemo(() => getSqrt(number), [number]);

  const render = useRef(1);

  useEffect(() => {
    render.current = render.current + 1;
  }, []);

  const handleClick = () => {
    setInc((prevState) => {
      console.log(prevState + 1);
      return prevState + 1;
    });
  };
  return (
    <div>
      <input
        type="number"
        className="form-control w-25"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h2 className="my-3">
        the sqrt of {number} is {sqrt}
      </h2>
      <button onClick={handleClick} className="btn btn-primary">
        RE Render
      </button>
      <h3>Renders: {render.current}</h3>
    </div>
  );
};

const getSqrt = (n) => {
  for (let i = 0; i <= 1000; i++) {
    console.log(i);
  }
  console.log("expensive function called");
  return Math.sqrt(n);
};

export default UseMemoExample;
