import React, { useEffect, useState } from 'react';

function LazyContent(): JSX.Element {
  const [isShowContent, setIsShowContent] = useState(false);
  /**
   * @note This component will render after a delay of 3 seconds
   * @note The delay is just to highlight lazy loading of the component
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowContent(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return <>{isShowContent && <p>This is Lazy Loaded Content</p>}</>;
}

export default LazyContent;
