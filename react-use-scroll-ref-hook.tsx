import React, { useEffect } from 'react';

const useScrollRef = (ref: React.MutableRefObject<any>, position: number = 0) => {
  const scrollRef = (ref: React.MutableRefObject<any>) => {
    window.scrollTo(position, ref.current.offsetTop);
  };
  useEffect(() => {
    scrollRef(ref);
  }, []);
};

export default useScrollRef;
