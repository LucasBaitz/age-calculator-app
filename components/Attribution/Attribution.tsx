import Link from "next/link";
import React from "react";

const Attribution = () => {
  return (
    <div className="text-gray-500 p-5 text-xs">
      Challenge by{" "}
      <Link href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="underline text-violet-700">
        Frontend Mentor
      </Link>
      . Coded by{" "}
      <Link href="https://lucasbaitz-social-links-profile.vercel.app" className="underline text-violet-700">
        Lucas Baitz
      </Link>
      .
    </div>
  );
};

export default Attribution;
