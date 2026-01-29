import React from "react";
import peDeMeia from "@/app/assets/projects/pe-de-meia.png";
import spacedRepetition from "@/app/assets/projects/spaced-repetition.png";
import sortingVizualizer from "@/app/assets/projects/sorting-visualizer.png";
import trackboard from "@/app/assets/projects/trackboard.png";
import wodLog from "@/app/assets/projects/wod-log.png";
import writeBetter from "@/app/assets/projects/write-better.png";
import fortuneMessage from "@/app/assets/projects/fortune-message.png";
import Image, { StaticImageData } from "next/image";
import { Carousel, CarouselItem } from "../carousel";
import { LuExternalLink, LuGithub } from "react-icons/lu";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  image: StaticImageData;
  links: {
    github: string;
    demo?: string;
  };
}

const projects: Project[] = [
  {
    name: "Pé de Meia",
    description: "Project to simplify day-to-day financial management.",
    technologies: ["Next.js", "Typescript", "MongoDB", "Auth", "Tailwind"],
    image: peDeMeia,
    links: {
      github: "https://github.com/GuiPM001/pe-de-meia",
      demo: "https://pe-de-meia.vercel.app",
    },
  },
  {
    name: "Spaced repetition",
    description:
      "Application that allows study based on the spaced repetition technique using flashcards.",
    technologies: ["Clojure", "MySQL", "RabbitMQ", "React", "Typescript"],
    image: spacedRepetition,
    links: {
      github: "https://github.com/GuiPM001/spaced-repetition",
    },
  },
  {
    name: "Sorting vizualizer",
    description: "Sorting visualizer built with React",
    technologies: ["React", "Typescript"],
    image: sortingVizualizer,
    links: {
      github: "https://github.com/GuiPM001/sorting-visualizer",
      demo: "https://sorting-visualizer-guipm.vercel.app/",
    },
  },
  {
    name: "Trackboard",
    description:
      "Website that uses the information provided by the Spotify API to display information and generate music recommendations.",
    technologies: ["React", "Typescript", "Material UI"],
    image: trackboard,
    links: {
      github: "https://github.com/GuiPM001/track-board",
    },
  },
  {
    name: "Wod Log",
    description:
      "System for logging workouts, tracking WODs, weights, and progress in CrossFit.",
    technologies: ["Next.js", "Typescript", "Tailwind", "MongoDB", "Auth"],
    image: wodLog,
    links: {
      github: "https://github.com/GuiPM001/wod-log",
      demo: "https://wod-log.vercel.app/",
    },
  },
  {
    name: "Write Better",
    description: "Web site that helps you with your English writing skill.",
    technologies: ["Gen AI", "React", "Typescript", "Tailwind"],
    image: writeBetter,
    links: {
      github: "https://github.com/GuiPM001/write-better",
      demo: "https://write-better.vercel.app/",
    },
  },
  {
    name: "Fortune Message",
    description:
      "A fortune message generator, integrated with GPT to generate different messages every day.",
    technologies: ["Gen AI", "React", "Typescript", "Tailwind"],
    image: fortuneMessage,
    links: {
      github: "https://github.com/GuiPM001/fortune-message",
      demo: "https://fortune-message.vercel.app/",
    },
  },
];

export default function Projects() {
  return (
    <div className="w-full px-8 md:w-2/3 md:px-0 xl:w-1/2 pt-32 justify-self-center">
      <h1 className="text-3xl font-semibold mb-6">Projects</h1>

      <Carousel>
        {projects.map((p) => (
          <CarouselItem key={p.name} className="min-w-80 md:min-w-96">
            <div className="h-110 mr-4 rounded-lg border border-background-accent text-gray-400">
              <Image
                src={p.image}
                alt="Project preview"
                className="w-full rounded-t-lg object-cover"
              />

              <div className="px-4 py-3">
                <h2 className="text-xl text-gray-300 font-semibold">
                  {p.name}
                </h2>
                <p className="text-sm">{p.description}</p>

                <div className="flex flex-row flex-wrap gap-2 mt-6">
                  {p.technologies.map((t) => (
                    <div
                      key={t}
                      className="px-3 py-1 flex rounded-full bg-background-accent"
                    >
                      <span className="text-xs">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-row gap-2 px-4 py-3 absolute bottom-0">
                <a
                  href={p.links.github}
                  target="_blank"
                  className="flex flex-row gap-1 items-center rounded-lg hover:bg-sky-600/90 hover:text-white duration-200 px-2"
                >
                  <LuGithub /> Github
                </a>

                {p.links.demo && (
                  <a
                    href={p.links.demo}
                    target="_blank"
                    className="flex flex-row gap-1 items-center rounded-lg hover:bg-sky-600/90 hover:text-white duration-200 px-2"
                  >
                    <LuExternalLink /> Access
                  </a>
                )}
              </div>
            </div>
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  );
}
