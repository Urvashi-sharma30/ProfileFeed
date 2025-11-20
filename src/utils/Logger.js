export const Logger = {
  log: (...args) => {
    if (__DEV__) console.log(...args);
  },
  error: (...args) => {
    if (__DEV__) console.error(...args);
  }
};
