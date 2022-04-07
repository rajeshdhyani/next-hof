 const hideIf = condition => result => {
  if (condition) return null;
  return typeof result === "function"
    ? result()
    : result;
};

export default hideIf