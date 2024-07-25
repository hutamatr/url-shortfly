import React, { useState } from "react";
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
  const [inputLink, setInputLink] = useState<string>("");

  const { isLoading, isError, error, mutate } = useMutation({
    mutationFn: async (inputLink: string) => {
      const response = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_BITLY_API_URL}`,
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_BITLY_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        data: {
          long_url: inputLink,
          domain: "bit.ly",
          group_guid: `${import.meta.env.VITE_BITLY_GROUP_GUID}`,
        },
      });

      if (response.status >= 400) {
        throw new Error("Network response was not ok");
      }

      return response;
    },
    onSettled: (data) => {
      console.log("link-data", data);
      if (data) {
        const { link, long_url } = data?.data;
        setLinksData((prevState) => {
          return [
            {
              id: Date.now().toString(),
              shortLink: link,
              original_link: long_url,
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

  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setInputLink(event.currentTarget.value);
  };

  const submitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputLink) {
      mutate(inputLink);
      setIsFormEmpty(false);
    } else {
      setIsFormEmpty(true);
    }
  };

  return (
    <section className="mx-auto flex max-w-4xl flex-col sm:px-5 lg:px-0">
      <div className="relative bottom-20 my-5 mx-4 rounded-md bg-primary-dark-violet bg-shorten-mobile bg-[length:250px_120px] bg-right-top bg-no-repeat p-4 sm:bottom-16 sm:mx-auto sm:h-24 sm:max-w-4xl sm:bg-shorten-desktop sm:bg-cover sm:p-6 md:w-full">
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
              value={inputLink}
              onChange={inputChangeHandler}
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
        error={error?.message as string}
      />
    </section>
  );
};

export default LinkInput;
