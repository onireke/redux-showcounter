import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const show = useSelector((state) => state.showCounter);
  const handleIncrementClick = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrementClick = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleIncreaseClick = () => {
    dispatch({ type: "INCREASE", amount: 10 });
  };
  const toggleHandler = () => {
    dispatch({ type: "toggle" });
  };
  return (
    <div>
      <h1>counter</h1>
      {show && <div>{counter}</div>}
      <button onClick={handleIncrementClick}>increment</button>
      <button onClick={handleDecrementClick}>decrement</button>
      <button onClick={handleIncreaseClick}> increase by 10</button>
      <button onClick={toggleHandler}> toggle hide counter </button>
    </div>
  );
}

export default Counter;
