"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
        
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hey there, I&apos;m Sumeet Mourya - a passionate developer. Welcome to my corner of the
          digital world!
        </Paragraph>
        <Paragraph className=" mt-4">
          Since the early days of my journey, I&apos;ve been captivated by the art
          of crafting exceptional digital experiences. As a developer,
          I thrive on turning lines of code into functional and elegant solutions.
          My goal is to create extensive and scalable backend systems along with smooth UI
        </Paragraph>

        <Paragraph className=" mt-4">
          I know <span className="text-yellow-400">{" "}Java and Typescript</span> along with technologies like
          <span className="text-blue-400">{" "}Next js, React js, Express, Databases like Postgress, Mongo db and Redis.
            I&apos;m also bit comfortable in Machine Learning and AI</span>.
        </Paragraph>
        <Paragraph className=" mt-4">
          What sets me apart is my unwavering appreciation for design.
          I believe that aesthetics and usability go hand in hand.
          My eye for awesome design ensures that every project I undertake
          looks stunning on the surface for that I use <span className="text-blue-400">{" "}Tailwind CSS.</span>
        </Paragraph>
        <Paragraph className=" mt-4">
        If you are looking for someone with great backend and frontend understanding, Hit me up.
        Thanks for reading this and navigating through my creation.
        </Paragraph>
      </div>
    </div>
  );
}
