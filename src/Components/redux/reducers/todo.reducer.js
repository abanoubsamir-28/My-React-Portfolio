const initialState = [];

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      state = [...state, { title: action.title, content: action.content }];
      return state;
    default:
      return state;
  }
}
