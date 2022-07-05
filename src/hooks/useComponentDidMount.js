import React, { useRef } from 'react';

const useComponentDidMount = (cb) => {
  const isMethodCallback = useRef(false);
  console.log(isMethodCallback.current);
  if (!isMethodCallback.current) {
    isMethodCallback.current = true;
    cb();
  }
};
export default useComponentDidMount;
