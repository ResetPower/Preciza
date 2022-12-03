import { useState } from "react";
import Calculator from "./Calculator";
import Chemical from "./Chemical";
import Grapher from "./Grapher";
import HomePage from "./HomePage";
import Preferences from "./Preferences";
import ProjectView from "./ProjectView";

export type MPath = "home" | "calc" | "graph" | "chem" | "proj" | "pref";

export type MPathChanger = (to: MPath) => void;

const store: { curr: MPath } = {
  curr: "home",
};

export function useRouter(): [MPath, MPathChanger] {
  const [curr, setCurr] = useState<MPath>(store.curr);

  return [
    curr,
    (to) => {
      store.curr = to;
      setCurr(to);
    },
  ];
}

export function matchComponent(curr: MPath) {
  switch (curr) {
    case "home":
      return <HomePage />;
    case "calc":
      return <Calculator />;
    case "graph":
      return <Grapher />;
    case "chem":
      return <Chemical />;
    case "proj":
      return <ProjectView />;
    case "pref":
      return <Preferences />;
  }
}
