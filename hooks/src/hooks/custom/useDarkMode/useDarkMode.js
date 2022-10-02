import { useEffect, useState } from "react";
import useEventListener from "../useEventListener/useEventListener";
import useStorage from "../useStorage/useStorage";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useStorage("darkMode");
  const [prefersDarkMode, setPrefersDarkMode] = useState(false);
  const [mediaQueryList, setMediaQueryList] = useState(null);

  const mediaQuery = "(prefers-color-scheme: dark)";
  const enabled = darkMode ?? prefersDarkMode;

  useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setPrefersDarkMode(list.matches);
  }, [mediaQuery]);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", enabled);
  }, [enabled]);

  useEventListener(
    "change",
    (e) => setPrefersDarkMode(e.matches),
    mediaQueryList
  );

  return [enabled, setDarkMode];
}
