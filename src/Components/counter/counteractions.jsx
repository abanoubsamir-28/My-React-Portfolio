const CounterAction = (props) => {
  return (
    <button
      onClick={props.action}
      className={`mx-3 btn px-5 py-1 ${props.operator === "+" ? "btn-primary" : "btn-danger"}`}
    >
      {props.operator}
    </button>
  );
};

export default CounterAction;
