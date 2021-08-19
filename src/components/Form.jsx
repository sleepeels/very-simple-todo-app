import { useState } from "react";

const Form = (props) => {
  const { todos, setTodos } = props;
  const [todo, setTodo] = useState("");

  const inputHandler = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: todo, id: Date.now(), complete: false }]);
    setTodo("");
  };

  return (
    <div>
      <form>
        <input onChange={inputHandler} value={todo} type="text" />
        <button type="submit" onClick={handleSubmit}>
          add me!
        </button>
      </form>
    </div>
  );
};

export default Form;
