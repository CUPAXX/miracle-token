"use client";

import React, { useState } from "react";
import { BiCopy } from "react-icons/bi";

export default function AddressButton() {
  const [walletAddress] = useState("");
  const [copyButton, copyButtonSet] = useState(false);

  const handleButtonCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    copyButtonSet(true);
    setTimeout(() => {
      copyButtonSet(false);
    }, 2000);
  };
  return (
    <div className="flex flex-col items-center pt-8 pb-8 text-white">
      <p className=" text-lg">Contact Address (SOL)</p>
      <div
        className="cursor-pointer flex items-center justify-center gap-2 bg-zinc-800 w-[20rem] md:w-[31rem] py-2 my-2 rounded-md text-xs lg:text-base"
        onClick={handleButtonCopy}
      >
        {!copyButton ? (
          <>
            <BiCopy className="text-sm lg:text-3xl" />
            <p>{walletAddress}</p>
          </>
        ) : (
          <p>Copied!</p>
        )}
      </div>
    </div>
  );
}
