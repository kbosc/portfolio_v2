import { useState, useEffect } from "react";

/**
 * @param {string} mediaQuery
 * @param {boolean} initialValue
 * @return {boolean} 
 */

export const useMatchMedia = (mediaQuery, initialValue) => {
  const [isMatching, setIsMatching] = useState(initialValue);
  useEffect(() => {
    const watcher = window.matchMedia(mediaQuery);
    setIsMatching(watcher.matches);
    const listener = (matches) => {
      setIsMatching(matches.matches);
    };
    if (watcher.addEventListener) {
      watcher.addEventListener("change", listener);
    } else {
      watcher.addEventListener(listener);
    }
    return () => {
      if (watcher.removeEventListener) {
        return watcher.removeEventListener("change", listener);
      } else {
        return watcher.removeEventListener(listener);
      }
    };
  }, [mediaQuery]);

  return isMatching;
};
