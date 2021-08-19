import Todo from "./Todo";

const List = (props) => {
  const { todos, setTodos } = props;

  return (
    <div className="list-container">
      {todos.map((todo) => {
        return (
          <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        );
      })}
    </div>
  );
};

export default List;
