import React from "react";
import AddressButton from "../AddressButton/AddressButton";
import { FaXTwitter } from "react-icons/fa6";
import { SiSolana } from "react-icons/si";
import { FaCoins } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="grid grid-cols-1 items-center border-t border-green-500 pt-16 text-white">
      <h1 className="uppercase text-lg text-center">Get involved</h1>
      <AddressButton />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-0 py-8 border-b border-green-500 mx-10 md:mx-16">
        <a
          href="https://x.com/miracleainet?s=11&t=9xcMiDDUv1lBay_FkePTHA"
          rel="noopener noreferrer"
          target="_blank"
          className="flex gap-2 items-center justify-center md:justify-start hover:text-green-500"
        >
          <FaXTwitter size={20} />
          <p>@Miracle</p>
        </a>
        <a
          href="https://x.com/miracleainet?s=11&t=9xcMiDDUv1lBay_FkePTHA"
          rel="noopener noreferrer"
          target="_blank"
          className="flex gap-2 items-center justify-center hover:text-green-500"
        >
          <FaCoins size={20} />
          <p>$MIRACLE</p>
        </a>
        <a
          href="https://x.com/miracleainet?s=11&t=9xcMiDDUv1lBay_FkePTHA"
          rel="noopener noreferrer"
          target="_blank"
          className="flex gap-2 items-center justify-center md:justify-end hover:text-green-500"
        >
          <SiSolana size={20} />
          <p>$MIRACLE</p>
        </a>
      </div>

      <div className="italic text-center my-10 opacity-60 text-xs md:text-base mx-10 md:mx-16">
        <h3>Copyright © 2025, MIRACLE</h3>
        <p>
          $MIRACLE are highly experimental tokens with no guaranteed connection
          to any development work. No promises or guarantees of any kind are
          made.
        </p>
      </div>
    </div>
  );
}
