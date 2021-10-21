export default function addTodo(title, content) {
  return {
    type: "ADD_TODO",
    title: title,
    content: content,
  };
}
