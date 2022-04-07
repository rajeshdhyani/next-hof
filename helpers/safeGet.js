const safeGet = (defaultValue, propFn, object) => {
  let result = typeof propFn === 'function' ? propFn(object) : object[propFn];
  return result || defaultValue;
};

export default safeGet;
