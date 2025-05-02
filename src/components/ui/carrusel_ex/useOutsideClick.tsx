import { useEffect, type RefObject } from "react";

export const useOutsideClick = <T extends HTMLElement>(ref: RefObject<T>, callback: () => void) => {
  useEffect(() => {
    console.log("useOutsideClick montado"); // <-- prueba aquí
    const handleClick = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [ref, callback]);
};
