import { operators } from "../operators";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDigit, addOperator, getResult } from "../actions/actions-types";

const Calculator = () => {
  const dispatch = useDispatch();
  const { screen } = useSelector((state) => state);

  let watchedKeys = [];

  const handleKeyDown = (e) => {
    if (watchedKeys.map((el) => el.value).includes(e.key)) {
      const keyPressed = watchedKeys.find((el) => el.value === e.key);
      switch (keyPressed.type) {
        case "digit":
          dispatch(addDigit({ value: keyPressed.value }));
          break;
        case "operator":
          dispatch(addOperator({ operator: keyPressed.value }));
          break;
        case "equal":
          dispatch(getResult());
          break;
        default:
          return;
      }
    }
  };

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      watchedKeys.push({ value: i.toString(), type: "digit" });
    }
    for (const operator of operators) {
      watchedKeys.push({ value: operator.value, type: "operator" });
    }
    watchedKeys.push({ value: "=", type: "equal" });

    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, []);

  return (
    <div>
      <input
        style={{ textAlign: "right" }}
        type="text"
        readOnly
        value={screen}
      ></input>

      <div className="clavier">
        {[...Array(10).keys()].map((_, i) => (
          <button
            onClick={(e) => dispatch(addDigit({ value: e.target.value }))}
            key={i}
            value={i}
            title={i}
          >
            {i}
          </button>
        ))}

        {operators.map((operator, i) => (
          <button
            onClick={(e) => dispatch(addOperator({ operator: e.target.value }))}
            key={i}
            value={operator.value}
            title={operator.name}
          >
            {operator.symbol}
          </button>
        ))}

        <button title="equal" onClick={(e) => dispatch(getResult())}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
