import TodooutputComponent from "../todoinput/todooutput";
import TodoinputComponent from "../todooutput/todoinput";

const todoviewComponent = () => {
  return (
      <section>
          <TodoinputComponent/>
          <TodooutputComponent/>
      </section>
  )
};

export default todoviewComponent;
