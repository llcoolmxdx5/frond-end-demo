import React, { ReactNode } from "react";

type IProps = {
  children: ReactNode;
  click(e: React.MouseEvent): void;
};

export default function Button(props: IProps) {
  return (
    <>
      <button onClick={props.click}>{props.children}</button>
    </>
  );
}
