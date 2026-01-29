import { IconType } from "react-icons";
import {
  LuChartColumn,
  LuCodeXml,
  LuDatabase,
  LuLink,
  LuRadio,
  LuServer,
} from "react-icons/lu";

interface TechStack {
  icon: IconType;
  category: string;
  description: string;
  stacks: string[];
}

const techStacks: TechStack[] = [
  {
    icon: LuServer,
    category: "Backend",
    description: "Scalable and resilient architectures",
    stacks: [".NET", "Distributed Systems", "APIs", "Unit tests"],
  },
  {
    icon: LuDatabase,
    category: "Data",
    description: "Data modeling and optimization",
    stacks: ["SQL", "NoSQL", "Cache strategies"],
  },
  {
    icon: LuRadio,
    category: "Event Streaming",
    description: "Event-driven systems and messaging",
    stacks: ["Kafka", "RabbitMQ", "Async Processing"],
  },
  {
    icon: LuChartColumn,
    category: "Observability",
    description: "Monitoring and troubleshooting",
    stacks: ["Datadog", "Logs", "Alerting Strategy"],
  },
  {
    icon: LuCodeXml,
    category: "Frontend",
    description: "Modern business applications",
    stacks: ["React", "TypeScript", "Tailwind", "Micro frontend"],
  },
  {
    icon: LuLink,
    category: "Integrations",
    description: "Third-party systems and platforms",
    stacks: ["Amazon S3", "Gen AI", "OAuth", "API Gateway"],
  },
];

export default function About() {
  return (
    <div id="about" className="w-full px-8 md:w-2/3 md:px-0 xl:w-1/2 pt-24 justify-self-center">
      <h1 className="text-3xl font-semibold mb-6">About</h1>

      <p>
        I'm a fullstack developer with five years of experience, specializing in
        high-usage backend architecture, APIs, scalable and high-performance
        solutions, in addition to developing frontend applications for
        business-facing use.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {techStacks.map(e => (
          <div
            key={e.category}
            className="border text-gray-400 border-background-accent rounded-lg flex flex-col items-start md:items-center gap-1 p-5"
          >
            <div className="flex flex-row items-center gap-4">
              <div className="p-2 bg-background-accent rounded-lg">
                <e.icon className="w-5 h-5 text-sky-600/90" />
              </div>

              <div className="flex flex-col">
                <span className="text-gray-300 font-semibold text-lg">
                  {e.category}
                </span>
                <span className="text-sm">{e.description}</span>
              </div>
            </div>

            <div className="flex flex-row flex-wrap gap-2 mt-4">
              {e.stacks.map((stack) => (
                <div
                  key={stack}
                  className="px-3 py-1 flex rounded-full bg-background-accent"
                >
                  <span className="text-xs">{stack}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
