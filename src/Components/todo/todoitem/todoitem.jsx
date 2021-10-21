import { Accordion } from "react-bootstrap";

function TodoitemComponent(props) {
  console.log(props, "props");
  return <h1>hey</h1>;
}

export default TodoitemComponent;

// <Accordion>
// <Accordion.Item>
//   <Accordion.Header>{props.task.title}</Accordion.Header>
//   <Accordion.Body>{props.task.content}</Accordion.Body>
// </Accordion.Item>
// </Accordion>
