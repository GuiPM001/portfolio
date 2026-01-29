import { GITHUB_URL, LINKEDIN_URL } from "@/app/const";

export default function Contact() {
  return (
    <div className="w-full md:w-2/3 xl:w-1/2 h-60 mt-32 justify-self-center rounded-t-4xl contact-section p-10 flex flex-row justify-between text-gray-300">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-5xl font-bold text-white font-sans">
          Guilherme <br /> Pimentel
        </h1>

        <span className="mt-4 text-sm md:text-md">guilhermepimentelm0@gmail.com</span>
      </div>

      <div>
        <div className="flex flex-col gap-1">
          <h2 className="text-white text-xl md:text-2xl font-medium mb-1">Socials</h2>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            className="hover:text-white duration-200 md:text-md"
          >
            Linkedin
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            className="hover:text-white duration-200 md:text-md"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
