import { ReactNode } from "react";
import { matchComponent, MPath, useRouter } from "./routes";
import { IconContext } from "react-icons";
import { MdAutoGraph, MdCalculate, MdHome, MdSettings } from "react-icons/md";
import { SlChemistry } from "react-icons/sl";
import IconButton from "./components/IconButton";

export default function App() {
  const [curr, go] = useRouter();

  const Link = (props: { children: ReactNode; to: MPath }) => (
    <IconButton onClick={() => go(props.to)} active={curr === props.to}>
      {props.children}
    </IconButton>
  );

  return (
    <IconContext.Provider value={{ size: "1.3em" }}>
      <div className="flex h-full">
        <div className="w-20 space-y-1 text-2xl font-bold bg-slate-100 flex flex-col items-center">
          <div data-tauri-drag-region className="h-9 w-full" />
          <Link to="home">
            <MdHome />
          </Link>
          <Link to="calc">
            <MdCalculate />
          </Link>
          <Link to="graph">
            <MdAutoGraph />
          </Link>
          <Link to="chem">
            <SlChemistry />
          </Link>
          <div className="flex-grow" />
          <Link to="pref">
            <MdSettings />
          </Link>
          <div className="h-9 w-full" />
        </div>
        <div className="flex-grow">
          <div data-tauri-drag-region className="h-9 w-full" />
          {matchComponent(curr)}
        </div>
      </div>
    </IconContext.Provider>
  );
}
