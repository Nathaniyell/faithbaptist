import Link from "next/link";
import React from "react";

type QuickLinksProps = {
  heading: string;
  linksArray: any[];
};

export default function QuickLinkComp({
  heading,
  linksArray,
}: QuickLinksProps) {
  return (
    <div className="flex flex-col gap-6 justify-center hover:bg-black hover:bg-opacity-40 p-2 transition-all duration-300 rounded-md">
      <h1 className="text-xl sm:text-3xl font-bold mb-2">{heading}</h1>
      {linksArray.map(({ title, href }) => (
        <Link
          key={title}
          className="text-[0.99rem] hover:underline"
          href={href ? href : title}
        >
          {title}
        </Link>
      ))}
    </div>
  );
}