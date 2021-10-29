import { digit, operation, equal } from "./types";
import { operators } from "./operators";

const getWatchedKeys = () => {
  let watchedKeys = [];
  for (let i = 0; i < 10; i++) {
    watchedKeys.push({ value: i.toString(), type: digit });
  }
  for (const operator of operators) {
    watchedKeys.push({ value: operator.value, type: operation });
  }
  watchedKeys.push({ value: "=", type: equal });
  return watchedKeys;
};

export const watchedKeys = getWatchedKeys();
