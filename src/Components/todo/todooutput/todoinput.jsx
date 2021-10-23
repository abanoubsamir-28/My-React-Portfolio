import { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import addTodo from "../../redux/actions/todo.actions";

const TodoinputComponent = () => {
  const title = useRef();
  const content = useRef();
  const dispatch = useDispatch();

  const sendData = () => {
    if (
      title.current.value.length === 0 ||
      content.current.value.length === 0
    ) {
      alert("Fill The Empty Fields!!");
    } else {
      const task = {
        title: title.current.value,
        content: content.current.value,
      };
      dispatch(addTodo(task));
    }
    title.current.value = "" ;
    content.current.value = "" ;
  };

  return (
    <Form className=" py-3 bg-success">
      <div className="container">
        <h1 className="text-center py-2 fw-bold text-dark ">
          Welcome to The Todo App
        </h1>
        <Form.Group className="mb-3 container" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter Task Title"
            ref={title}
          />
        </Form.Group>
        <Form.Group className="mb-3 container" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter Task Content"
            ref={content}
          />
          <Form.Text className="text-white d-block my-2">
            We Save your Tasks!!
          </Form.Text>
        </Form.Group>
        <Button
          variant="warning"
          className="px-5 mx-2"
          onClick={(event) => sendData(event)}
        >
          Add Task !
        </Button>
      </div>
    </Form>
  );
};

export default TodoinputComponent;
