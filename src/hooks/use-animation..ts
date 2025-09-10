import { useEffect } from "react";

export const useAOS = (options?: {
  duration?: number;
  once?: boolean;
  offset?: number;
}) => {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: options?.duration ?? 1000,
        once: options?.once ?? true,
        offset: options?.offset ?? 100,
      });
    });
  }, [options]);
};
