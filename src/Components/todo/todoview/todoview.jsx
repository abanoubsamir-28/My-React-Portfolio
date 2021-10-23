import TodooutputComponent from "../todoinput/todooutput";
import TodoinputComponent from "../todooutput/todoinput";

const TodoviewComponent = () => {
  return (
    <section>
      <TodoinputComponent />
      <TodooutputComponent />
    </section>
  );
};

export default TodoviewComponent;
