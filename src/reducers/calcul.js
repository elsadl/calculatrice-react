import { operation, digit, equal } from "../constants/types";

const stateInit = {
  number: "",
  calculation: [],
  result: null,
  screen: "",
};

const reducer = (state = stateInit, action = {}) => {

  const { type, value } = action;

  switch (type) {
    
    case digit:
      const newNumber = state.number + value;
      return {
        ...state,
        number: newNumber,
        screen: newNumber,
      };

    case operation:
      return {
        ...state,
        calculation: [...state.calculation, Number(state.number), value],
        screen: value,
        number: "",
      };

    case equal:
      const calculation = [...state.calculation, Number(state.number)]
        .toString()
        .replaceAll(",", "");
      // eslint-disable-next-line no-eval
      const result = eval(calculation);
      return {
        number: "",
        calculation: [],
        result: result,
        screen: result,
      };

    default:
      return state;
  }
};

export default reducer;
