import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Contributions } from "@/components/Contribution";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Articles | Ankur Sharma",
  description:
    "Ankur Sharma is a full stack developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};
export default async function ContributionsPage() {
  return (
    <Container>
      <span className="text-4xl">👨‍💻</span>
      <Heading className="font-black pb-4">My Open source Contributions</Heading>
      <div className="pb-5">
        <Paragraph >
          I try to contribute to open source projects which excites me,
        </Paragraph>
        <Paragraph>
          or if I am trying to learn that tech stack{" "}
          <Highlight>PS: Not Readme ones</Highlight>
        </Paragraph>
      </div>
      <Contributions />
    </Container>
  );
}