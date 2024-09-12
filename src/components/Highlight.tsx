import React from "react";

import { twMerge } from "tailwind-merge";

export const Highlight = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span className={twMerge("bg-neutral-700 px-2 py-1 rounded-tl-lg rounded-br-lg rounded-tr-sm rounded-bl-sm", className)}>
      {children}
    </span>
  );
};
