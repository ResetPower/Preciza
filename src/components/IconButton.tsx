import { MouseEventHandler, ReactNode } from "react";

export default function IconButton(props: {
  children: ReactNode;
  active?: boolean;
  onClick?: MouseEventHandler;
}) {
  return (
    <div
      className={`p-3 cursor-pointer rounded m-hoverable ${
        props.active && "m-hoverable-active"
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}
