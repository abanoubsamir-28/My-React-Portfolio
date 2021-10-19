import './CounterAction.css'
const CounterAction = (props) => {
    return (<>
    <button onClick={props.decrease}>Decrease</button>
    <button onClick={props.increase}>Increase</button>
</>
    )
}
export default CounterAction;