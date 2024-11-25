import React from "react";
import { Heading } from "./Heading";

export const TechStack = () => {
  const stack = ["NextJs", "ReactJs", "ExpressJS", "PostgreSQL", "Redis", "MongoDB", "Typescript", "Golang", "Docker", "AWS", "Github", "TRPC"];

  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="grid grid-cols-4 gap-3">
        {stack.map((item,index) => (
          
          <p key={index} className="bg-gray-950 hover:text-white hover:opacity-75 rounded-full py-3 px-4 text-primary text-md text-center">
            {item}
          </p>
              ))}
              </div>
            </div>
          );
}