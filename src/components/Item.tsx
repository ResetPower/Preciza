import { ReactNode } from "react";

export default function Item(props: { children: ReactNode }) {
  return (
    <div className="font-medium p-3 cursor-pointer rounded m-hoverable">
      {props.children}
    </div>
  );
}
