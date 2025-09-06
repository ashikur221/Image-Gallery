import Link from "next/link";
import React, { FC } from "react";

type TProps = { label: string; url: string };




const Item: FC<TProps> = ({ url, label }) => {
  return (
    <Link
      className="inline-block p-2 text-lg text-slate-800 hover:text-white tracking-wide uppercase relative group z-20 after:content-[''] after:absolute after:left-0 after:bottom-1 
            hover:bg-slate-800
            after:bg-slate-800 after:w-full after:h-px after:hover:h-9 after:z-20 transition-all after:transition-all duration-100 active:translate-y-0.5"
      href={url}
    >
        {label}
    </Link>
  );
};

export default Item;
