import { NUMBER, OPERATOR, EQUAL } from "../constants/actions";

export const addDigit = (payload) => ({ type: NUMBER, payload });
export const addOperator = (payload) => ({ type: OPERATOR, payload });
export const getResult = (payload) => ({ type: EQUAL, payload });
