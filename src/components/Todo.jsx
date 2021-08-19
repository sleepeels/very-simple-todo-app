const Todo = (props) => {
  const { todo, todos, setTodos } = props;
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "finished" : ""}`}>
        {todo.text}
      </li>
      <div>
        <button className="delete-item" onClick={deleteHandler}>
          <i class="fas fa-trash"></i>
        </button>
        <button className="complete-item" onClick={completeHandler}>
          <i class="fas fa-check-square"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
