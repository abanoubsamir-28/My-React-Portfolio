
const initData = null ; 

export default function todoReducer(state = initData ,action) {
    switch (action.type) {
        case "ADD_TODO":
            console.log("Reducer Fired with state" , action.payload);
            state = action.payload ; 
            return state
        default:
            return state;
    }
}
