import { Accordion } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { remTodo } from "../../redux/actions/todo.actions";

function TodoitemComponent(props) {
  const dispatch = useDispatch();
  const deleteTask = (task) => {
    dispatch(remTodo(task));
  };
  return (
    <Accordion className="w-75 mx-auto py-1 text-wrap">
      <Accordion.Item style={{ overflowWrap: "break-word" }}>
        <Accordion.Header>{props.task.title}</Accordion.Header>
        <Accordion.Body>
          {props.task.content}
          <div className="controls my-2">
            <button
              className="btn btn-danger px-5"
              onClick={() => deleteTask(props.task)}
            >
              Remove
            </button>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default TodoitemComponent;
