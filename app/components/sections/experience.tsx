import { LuBriefcase } from "react-icons/lu";

interface Experience {
  initialDate: string;
  finalDate?: string;
  title: string;
  company: string;
  description: string;
}

const experiences: Experience[] = [
  {
    initialDate: "Jul 2025",
    title: "Fullstack developer",
    company: "Localiza&CO",
    description: `Engineer building scalable, high-usage distributed systems with microservices, 
      event-driven architecture, and performance-focused backend solutions.`,
  },
  {
    initialDate: "Feb 2025",
    finalDate: "Jul 2025",
    title: "Backend developer",
    company: "Raro Labs",
    description: `Engineer building scalable, high-usage distributed systems with microservices, 
      event-driven architecture, and performance-focused backend solutions.`,
  },
  {
    initialDate: "Ago 2021",
    finalDate: "Fev 2025",
    title: "Fullstack developer",
    company: "Framework Digital",
    description: `Engineer building scalable, high-usage distributed systems with microservices, 
      event-driven architecture, and performance-focused backend solutions.`,
  },
  {
    initialDate: "Abr 2021",
    finalDate: "Jul 2021",
    title: "Frontend developer - internship",
    company: "Framework Digital",
    description: `Engineer building scalable, high-usage distributed systems with microservices, 
      event-driven architecture, and performance-focused backend solutions.`,
  },
];

export default function Experience() {
  return (
    <div className="w-full px-8 md:w-2/3 md:px-0 xl:w-1/2 pt-32 justify-self-center">
      <h1 className="text-3xl font-semibold mb-6">Experience</h1>

      <div className="flex flex-col md:gap-4 relative">
        <div className="absolute mt-4 left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-t from-background to-15% to-gray-400 md:-translate-x-1/2 origin-top" />

        {experiences.map((e, index) => (
          <div
            key={`${e.company}-${index}`}
            className={`relative flex items-start gap-8 mb-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-sky-600 rounded-full border-4 border-background md:-translate-x-1/2 z-10" />

            {/* Content card */}
            <div
              key={`${e.title}-${index}`}
              className={`ml-12 md:ml-0 md:w-[calc(50%-1rem)] border border-background-accent text-gray-400 rounded-lg flex flex-col p-5 gap-4
              ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
            >
              <div className="flex flex-row items-center gap-2">
                <div className="p-2 bg-background-accent rounded-lg">
                  <LuBriefcase />
                </div>

                <span>
                  {e.initialDate} - {e.finalDate ?? "Present"}
                </span>
              </div>

              <span className="text-xl text-gray-300 font-semibold">
                {e.title}
              </span>

              <span className="text-sky-600/90 -mt-4">{e.company}</span>

              <p>{e.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
