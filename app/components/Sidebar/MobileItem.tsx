"use client";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface MobileItemProps {
  herf: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
}
const MobileItem: React.FC<MobileItemProps> = ({
  herf,
  icon: Icon,
  active,
  onClick,
}) => {
  const handelClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <Link
      onClick={handelClick}
      href={herf}
      className={clsx(
        `group flex gap-x-3 rounded-md w-full justify-center p-4 text-sm leading-6 font-semibold text-gray-500 hover:text-black hover:bg-gray-100`,
        active && "bg-gray-100 text-black"
      )}
    >
      <Icon className="h-6 w-6 shrink-0" />
    </Link>
  );
};

export default MobileItem;
