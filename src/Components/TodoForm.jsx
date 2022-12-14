import React, { useState, useEffect, useRef } from "react";

export default function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const focusRef = useRef(null);
  useEffect(() => {
    focusRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  return (
    <>
      <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input
              placeholder="Update Your Item"
              value={input}
              name="text"
              className="todo-input edit"
              onChange={handleChange}
              ref={focusRef}
            />
            <button onClick={handleSubmit} className="todo-button edit">
              Update Todo
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Add A Todo"
              value={input}
              name="text"
              className="todo-input"
              onChange={handleChange}
              ref={focusRef}
              autoComplete="off"
            />
            <button onClick={handleSubmit} className="todo-button">
              Add Todo
            </button>
          </>
        )}
      </form>
    </>
  );
}
