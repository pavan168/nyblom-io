import Link from "next/link";
import React, { FC } from "react";
import Eye from "./icons/Eye";

export interface CardProps {
  title: string;
  subtitle: string;
  publishedDate: string;
  slug: string;
  reads: number;
}

const Card: FC<CardProps> = ({
  title,
  subtitle,
  publishedDate,
  slug,
  reads,
}) => {
  return (
    <Link className="no-underline" href={`/blog/${slug}`}>
      <div className="w-full p-2 mb-4 cursor-pointer border-transparent border-4 border-spacing-4 hover:border-yellow">
        <div className="font-bold text-xl mt-1 mb-1">{title}</div>
        <p className=" text-base mt-1 mb-1">{subtitle}</p>
        <div className="flex flex-row items-center justify-between">
          <p className="text-black text-opacity-60 text-md italic mt-1 mb-1">
            First Published: {publishedDate}
          </p>
          <div className="flex flex-row text-md text-black text-opacity-60">
            <Eye /> <div className="w-1" /> {reads}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
