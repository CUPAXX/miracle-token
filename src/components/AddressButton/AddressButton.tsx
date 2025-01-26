"use client";

import React, { useState } from "react";
import { BiCopy } from "react-icons/bi";

export default function AddressButton() {
  const [walletAddress] = useState(
    "6HgJHzGpq3fSLmkepsaC8F3VtpUWfXcG4hmUaf4Vpump"
  );
  const [copyButton, copyButtonSet] = useState(false);

  const handleButtonCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    copyButtonSet(true);
    setTimeout(() => {
      copyButtonSet(false);
    }, 2000);
  };
  return (
    <div className="flex flex-col items-center pt-8 pb-8">
      <p className=" text-lg">Contact Address (SOL)</p>
      <div
        className="cursor-pointer flex items-center justify-center gap-2 bg-zinc-800 w-[31rem] py-2 my-2 rounded-md"
        onClick={handleButtonCopy}
      >
        {!copyButton ? (
          <>
            <BiCopy size={30} />
            <p>{walletAddress}</p>
          </>
        ) : (
          <p>Copied!</p>
        )}
      </div>
    </div>
  );
}
