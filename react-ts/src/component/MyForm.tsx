import React from "react";

export default function MyForm() {
  const userRef: React.RefObject<HTMLInputElement> = React.createRef();
  let pwdInput: HTMLInputElement | null;
  const aaaRef = React.useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    console.log("submit");
    console.log(userRef.current?.value);
    console.log(userRef.current!.value);
    console.log((userRef.current as HTMLInputElement).value);
    console.log(pwdInput?.value);
    console.log(aaaRef.current?.value);
    e.preventDefault();
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        username: <input type="text" ref={userRef} />
        pwd:{" "}
        <input
          type="text"
          ref={(node) => {
            return (pwdInput = node);
          }}
        />
        aaa: <input type="text" ref={aaaRef} />
        <button type="submit">提交</button>
      </form>
    </>
  );
}
