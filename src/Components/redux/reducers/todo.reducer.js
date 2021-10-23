const initialState = {
  todos: [],
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "REM_TODO":
      return {
        ...state,
        todos: state.todos.filter((ele) => ele.title !== action.payload.title),
      };
    default:
      return state;
  }
}
