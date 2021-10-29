import { operators } from "../operators";
import { useDispatch, useSelector } from "react-redux";
import { addDigit, addOperator, getResult } from "../actions/actions-types";

const Calculator = () => {
  const dispatch = useDispatch();
  const { screen } = useSelector((state) => state);

  return (
    <div>
      <input type="text" readOnly value={screen}></input>

      {[...Array(10).keys()].map((_, i) => (
        <button
          onClick={(e) => dispatch(addDigit({ value: e.target.value }))}
          key={i}
          value={i}
        >
          {i}
        </button>
      ))}

      {operators.map((operator, i) => (
        <button
          onClick={(e) => dispatch(addOperator({ operator: e.target.value }))}
          key={i}
          value={operator.value}
        >
          {operator.symbol}
        </button>
      ))}

      <button onClick={(e) => dispatch(getResult())}>
        =
      </button>
    </div>
  );
};

export default Calculator;
