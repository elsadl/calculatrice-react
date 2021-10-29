import { NUMBER, OPERATOR, EQUAL } from "../constants/actions";

const stateInit = {
  number: "",
  operation: [],
  result: null,
  screen: "",
};

const reducer = (state = stateInit, action = {}) => {
  console.log(action);

  switch (action.type) {
      
    case NUMBER:
      const { value } = action.payload;
      const newNumber = state.number + value;
      return {
        ...state,
        number: newNumber,
        screen: newNumber,
      };

    case OPERATOR:
      const { operator } = action.payload;
      return {
        ...state,
        operation: [...state.operation, Number(state.number), operator],
        screen: operator,
        number: "",
      };

    case EQUAL:
      const operation = [...state.operation, Number(state.number)]
        .toString()
        .replaceAll(",", "");
      // eslint-disable-next-line no-eval
      const result = eval(operation);
      return {
        operation: [],
        number: "",
        result: result,
        screen: result,
      };

    default:
      return state;
  }
};

export default reducer;
