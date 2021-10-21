export default function addTodo(payload) {
  console.log("Action Fired with data" , payload);
  return {
    type: "ADD_TODO",
    payload: payload,
  };
}
