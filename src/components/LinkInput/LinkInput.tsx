import React, { useRef } from "react";

import Input from "../UI/Input";
import Button from "../UI/Button";

const LinkInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const linkSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputLink = inputRef.current?.value;

    console.log(inputLink);

    inputRef.current!.value = "";
  };

  return (
    <section className="relative bottom-20 my-5 mx-4 rounded-md bg-primary-dark-violet bg-bg-shorten-mobile bg-[length:250px_120px] bg-right-top bg-no-repeat p-4">
      <form onSubmit={linkSubmitHandler} className="flex flex-col gap-y-4">
        <Input
          placeholder="Shorten a link here..."
          className="w-full rounded py-2 px-3 placeholder:text-sm placeholder:font-medium focus:border-0"
          ref={inputRef}
        />
        <Button className="w-full rounded-md py-2">Shorten It!</Button>
      </form>
    </section>
  );
};

export default LinkInput;
