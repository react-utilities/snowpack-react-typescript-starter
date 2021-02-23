import React, { useEffect, useState } from 'react';

function LazyContent(): JSX.Element {
  const [isShowContent, setIsShowContent] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowContent(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return <>{isShowContent && <p>This is Lazy Loaded Content</p>}</>;
}

export default LazyContent;
