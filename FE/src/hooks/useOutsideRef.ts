import { useCallback, useEffect, useRef } from "react";

const useOutsideRef = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      ref.current && !ref.current.contains(event.target as Node) && callback();
    },
    [callback],
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  return ref;
};
export default useOutsideRef;
