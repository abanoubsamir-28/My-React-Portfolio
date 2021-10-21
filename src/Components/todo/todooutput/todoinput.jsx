import { Form, Button } from "react-bootstrap";

const TodoinputComponent = () => {

  return (
    <Form className=" py-3 bg-success">
      <h1 className="text-center py-2 fw-bold text-dark ">Welcome to The Todo App</h1>
      <Form.Group className="mb-3 container" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Task" />
        <Form.Text className="text-white d-block my-2">We Save your Tasks!!</Form.Text>
        <Button variant="warning" >
          Add Task !
        </Button>
      </Form.Group>
    </Form>
  );
};

export default TodoinputComponent;
