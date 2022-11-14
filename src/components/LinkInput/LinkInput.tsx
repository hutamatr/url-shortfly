import React, { useRef } from "react";

import Input from "../UI/Input";
import Button from "../UI/Button";

const LinkInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const linkSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputLink = inputRef.current?.value;

    console.log(inputLink);
  };

  return (
    <section className="relative my-5 mx-4 rounded-md bg-primary-dark-violet p-4">
      <form onSubmit={linkSubmitHandler} className="flex flex-col gap-y-4">
        <Input
          placeholder="Shorten a link here..."
          className="w-full rounded p-2 placeholder:text-sm placeholder:font-semibold focus:border-0"
          ref={inputRef}
        />
        <Button className="w-full rounded-md py-2">Submit</Button>
      </form>
    </section>
  );
};

export default LinkInput;
