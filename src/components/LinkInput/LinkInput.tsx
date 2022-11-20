import React, { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import Input from "../UI/Input";
import Button from "../UI/Button";
import LinkLists from "./LinkLists";

export interface LinksData {
  id: string;
  shortLink: string;
  original_link: string;
}

const LinkInput = () => {
  const [linksData, setLinksData] = useState<LinksData[]>([]);
  const [isFormEmpty, setIsFormEmpty] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const { isLoading, isError, error, mutate } = useMutation({
    mutationFn: async (inputLink: string) => {
      const URL = `https://api.shrtco.de/v2/shorten?url=${inputLink}`;
      const response = await axios({
        method: "POST",
        url: URL,
      });

      if (response.status !== 201) {
        throw new Error("Network response was not ok");
      }

      return response;
    },
    onSettled: (data) => {
      if (data && inputRef.current) {
        inputRef.current.value = "";
        const { full_short_link2, original_link } = data?.data.result;
        setLinksData((prevState) => {
          return [
            {
              id: Date.now().toString(),
              shortLink: full_short_link2,
              original_link: original_link,
            },
            ...prevState,
          ];
        });
      }
    },
    onError: async (error: any) => {
      console.error("onError", error?.response.data.error);
    },
  });

  const submitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const linkInput = inputRef.current?.value;
    if (linkInput) {
      mutate(linkInput);
      setIsFormEmpty(false);
    } else {
      setIsFormEmpty(true);
    }
  };

  return (
    <section className="mx-auto flex max-w-4xl flex-col sm:px-5 lg:px-0">
      <div className="relative bottom-20 my-5 mx-4 rounded-md bg-primary-dark-violet bg-bg-shorten-mobile bg-[length:250px_120px] bg-right-top bg-no-repeat p-4 sm:bottom-16 sm:mx-auto sm:h-24 sm:max-w-4xl sm:bg-bg-shorten-desktop sm:bg-cover sm:p-6 md:w-full">
        <form
          onSubmit={submitFormHandler}
          className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-4"
        >
          <div className="w-full">
            <Input
              placeholder="Shorten a link here..."
              className={`w-full rounded-md py-2 px-3 outline-none placeholder:text-sm placeholder:font-medium ${
                isFormEmpty
                  ? "bg-red-50 outline outline-red-400 placeholder:text-red-300"
                  : ""
              }`}
              ref={inputRef}
            />
            {isFormEmpty && (
              <span className="text-xs text-red-400">Please add a link</span>
            )}
          </div>
          <Button
            className="h-min w-full rounded-md py-2 hover:bg-primary-cyan/70 sm:w-1/3"
            type="submit"
          >
            Shorten It!
          </Button>
        </form>
      </div>
      <LinkLists
        linksData={linksData}
        isLoading={isLoading}
        isError={isError}
        error={error?.response.data.error}
      />
    </section>
  );
};

export default LinkInput;
