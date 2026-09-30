import { createContext, useContext, useSyncExternalStore } from "react";

let manual: boolean | null = null;
const listeners = new Set<() => void>();
function subscribe(callback: () => void) {
  listeners.add(callback);
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  const change = () => {
    document.documentElement.dataset.reducedMotion = String(snapshot());
    callback();
  };
  query.addEventListener("change", change);
  try {
    const stored = localStorage.getItem("genie-reduced-motion");
    if (stored !== null) manual = stored === "true";
  } catch {
    /* Private browsing may disable storage. */
  }
  return () => {
    listeners.delete(callback);
    query.removeEventListener("change", change);
  };
}
function snapshot() {
  return (
    manual ?? window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
function setReduced(value: boolean) {
  manual = value;
  try {
    localStorage.setItem("genie-reduced-motion", String(value));
  } catch {
    /* Preference remains in memory. */
  }
  document.documentElement.dataset.reducedMotion = String(value);
  listeners.forEach((listener) => listener());
}
const Preferences = createContext({ reduced: true, toggle: () => {} });
export function PreferencesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduced = useSyncExternalStore(subscribe, snapshot, () => true);
  return (
    <Preferences value={{ reduced, toggle: () => setReduced(!reduced) }}>
      {children}
    </Preferences>
  );
}
export const usePreferences = () => useContext(Preferences);
