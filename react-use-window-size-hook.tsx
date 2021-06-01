import { useState, useEffect } from 'react';

interface WindowSizeType {
  width: number;
  height: number;
}

const WindowSizeInit = {
  width: 0,
  height: 0,
};

const useWindowSize = (): WindowSizeType => {
  const [windowSize, setWindowSize] = useState<WindowSizeType>(WindowSizeInit);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
