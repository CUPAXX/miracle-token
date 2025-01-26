import React from "react";
import AddressButton from "../AddressButton/AddressButton";
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiSolana } from "react-icons/si";

export default function Footer() {
  return (
    <div className="grid grid-cols-1 items-center border-t border-green-500 pt-16">
      <h1 className="uppercase text-lg text-center">Get involved</h1>
      <AddressButton />
      <div className="flex justify-between py-8 border-b border-green-500 mx-24">
        <div className="flex gap-2 items-center">
          <FaTelegram size={20} />
          <p>Telegram</p>
        </div>
        <div className="flex gap-2 items-center">
          <FaXTwitter size={20} />
          <p>@Akun_Twitter</p>
        </div>
        <div className="flex gap-2 items-center">
          <FaXTwitter size={20} />
          <p>@Akun_Twitter</p>
        </div>
        <div className="flex gap-2 items-center">
          <SiSolana size={20} />
          <p>$MIRACLE</p>
        </div>
      </div>

      <div className="italic text-center my-10 opacity-60">
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
