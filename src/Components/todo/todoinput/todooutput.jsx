import { useState } from "react";
import { useSelector } from "react-redux";
import TodoitemComponent from "../todoitem/todoitem";

const TodooutputComponent = () => {
  useSelector((state) => console.log([state]));
  return (
    <div>
      {/* {tasks.map((item) => {
        return (
          <TodoitemComponent task={item} key={item.title}></TodoitemComponent>
        );
      })} */}
    </div>
  );
};

export default TodooutputComponent;

// return (
//   <div className="d-flex justify-content-center">
//     {tasks.length !== 0 ? (
//       <section>
//         {tasks.forEach((task) => {
//           return (
//             <TodoitemComponent
//               taskItem={task}
//               key={task.title}
//             ></TodoitemComponent>
//           );
//         })}
//       </section>
//     ) : (
//       <h1 className="my-5 fw-bold">You Can Plan you Day Now !</h1>
//     )}
//   </div>
// );

// {tasks.map((task) => {
//   return <TodoitemComponent task={task} key={task.title} />;
// })}

// {tasks.forEach((task) => {
//   return <TodoitemComponent></TodoitemComponent>;
// })}
