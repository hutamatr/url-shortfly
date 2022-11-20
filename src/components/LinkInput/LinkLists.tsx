import React, { useState } from "react";

import Button from "../UI/Button";
import { LinksData } from "./LinkInput";

interface Props {
  linksData: LinksData[];
  isLoading: boolean;
  isError: boolean;
  error: string;
}

const LinkLists = ({ linksData, isLoading, isError, error }: Props) => {
  const [isCopied, setIsCopied] = useState<string>("");

  const copyLinkHandler = (link: string, id: string) => {
    navigator.clipboard.writeText(link);
    setIsCopied(id);
  };

  return (
    <div className="relative bottom-16 px-5 sm:px-0">
      {isLoading && (
        <p className="my-2 text-center font-medium text-neutral-very-dark-blue">
          Loading...
        </p>
      )}
      {isError && (
        <p className="my-2 text-center font-medium text-red-700">{error}</p>
      )}
      <ul
        className={`flex flex-col gap-y-4 overflow-y-auto ${
          linksData.length > 2 ? "h-80" : ""
        }`}
      >
        {linksData.length >= 1 &&
          linksData?.map((data) => (
            <li
              key={data.id}
              className="flex flex-col rounded-md bg-white p-4 md:flex-row md:items-center md:gap-x-6"
            >
              <div className="mb-3 flex w-full flex-col gap-y-3 md:flex-row md:items-center md:justify-between">
                <p className="truncate border-b border-b-neutral-very-dark-violet p-1 sm:border-b-0 md:max-w-xs lg:max-w-lg">
                  {data.original_link}
                </p>
                <p className="text-center text-primary-cyan">
                  {data.shortLink}
                </p>
              </div>
              <Button
                type="button"
                className={`rounded-md py-2 text-sm md:w-28 ${
                  isCopied === data.id
                    ? "bg-primary-dark-violet hover:bg-primary-dark-violet/70"
                    : "hover:bg-primary-cyan/70 "
                }`}
                onClick={copyLinkHandler.bind(null, data.shortLink, data.id)}
              >
                {isCopied === data.id ? "Copied!" : "Copy"}
              </Button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LinkLists;
