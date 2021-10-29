import { useSelector } from "react-redux";

import Keyboard from "./Keyboard";

const Calculator = () => {
  const { screen } = useSelector((state) => state);

  return (
    <div className="calculatrice">
      <input type="text" readOnly value={screen}></input>
      <Keyboard />
    </div>
  );
};

export default Calculator;
