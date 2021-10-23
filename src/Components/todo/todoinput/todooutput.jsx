import { useSelector } from "react-redux";
import TodoitemComponent from "../todoitem/todoitem";

const TodooutputComponent = () => {
  const todostate = useSelector((state) => state.todos);
  console.log(todostate, "todos");

  return (
    <div>
      {todostate.length === 0 ? (
        <div>
          <h1 className="text-center text-muted py-5 text-uppercase fw-bold mt-5">
            Be Productive and Add Some Tasks!!
          </h1>
        </div>
      ) : (
        <div>
          {todostate.map((item, index) => (
            <TodoitemComponent task={item} key={index}></TodoitemComponent>
          ))}
        </div>
      )}
    </div>
  );
};

export default TodooutputComponent;
