import { operators } from "../constants/operators";
import { watchedKeys } from "../constants/watchedKeys";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { digit, operation, equal } from "../constants/types";

import Button from "../styles/Button";

const Keyboard = () => {
  const dispatch = useDispatch();

  const sendUpdate = (type, value) => {
    dispatch({ type, value });
  };

  const handleKeyDown = (e) => {
    if (watchedKeys.map((el) => el.value).includes(e.key)) {
      const keyPressed = watchedKeys.find((el) => el.value === e.key);
      sendUpdate(keyPressed.type, keyPressed.value);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, []);

  return (
    <>
      <div>
        {[...Array(10).keys()].map((_, i) => (
          <Button
            onClick={(e) => sendUpdate(digit, e.target.value)}
            key={i}
            value={i}
            title={i}
          >
            {i}
          </Button>
        ))}

        <Button
          id="equal"
          title="equal"
          onClick={(e) => sendUpdate(equal, e.target.value)}
        >
          =
        </Button>
      </div>

      <div>
        {operators.map((operator, i) => (
          <Button
            onClick={(e) => sendUpdate(operation, e.target.value)}
            key={i}
            value={operator.value}
            title={operator.name}
          >
            {operator.symbol}
          </Button>
        ))}
      </div>
    </>
  );
};

export default Keyboard;
