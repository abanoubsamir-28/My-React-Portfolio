export default function addTodo(payload) {
  return {
    type: "ADD_TODO",
    payload,
  };
}
export function remTodo(payload) {
  return {
    type: "REM_TODO",
    payload,
  };
}
