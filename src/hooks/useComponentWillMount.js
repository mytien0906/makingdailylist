import React, { useRef } from 'react';

const useComponentWillMount = (cb) => {
  const isMethodCallback = useRef(false);
  console.log(isMethodCallback.current);
  if (!isMethodCallback.current) {
    isMethodCallback.current = true;
    cb();
  }
};
export default useComponentWillMount;
