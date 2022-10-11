import React, { useRef } from "react";

const UseRefExample1 = () => {
  const inputRef = useRef();
  const paraRef = useRef();
  const Submit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = "Hello";
    inputRef.current.style.backgroundColor = "red";
    paraRef.current.innerText = "Goodbye";
  };
  return (
    <div>
      <form onSubmit={Submit}>
        <label htmlFor="name">Name</label>
        <input type="text" ref={inputRef} className="form-control nb-2" />
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>

        <p onClick={() => inputRef.current.focus()} ref={paraRef}>
          Hello World
        </p>
      </form>
    </div>
  );
};

export default UseRefExample1;
