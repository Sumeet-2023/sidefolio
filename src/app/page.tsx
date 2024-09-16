import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Sumeet</Heading>
      <Paragraph className="max-w-xl mt-4">
        I want to be a full-stack developer that loves{" "}
        <Highlight>building products</Highlight> and web apps.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I have been building scalable web apps that are performance optimised and stunning design for{" "}
        <Highlight>more than 6 months.</Highlight>
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
