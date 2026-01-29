import photo from "@/app/assets/photo.jpg";
import { GITHUB_URL, LINKEDIN_URL } from "@/app/const";
import Image from "next/image";
import { LuDownload, LuGithub, LuLinkedin } from "react-icons/lu";

export default function Hero() {
  return (
    <div id="hero" className="h-screen w-full bg-checkered-dark">
      <div className="h-screen md:w-full px-8 md:px-0 flex flex-col justify-center items-center bg-radial-[at_50%_40%] from-60% from-transparent to-80% to-background">
        <div className="justify-self-center mt-10">
          {/* PROFILE */}
          <div className="flex flex-col items-center md:flex-row">
            <Image
              src={photo}
              alt="Profile picture"
              className="w-48 h-48 object-cover mb-10 md:mb-0 rounded-full border-2 p-0.5 border-sky-600/90"
            />
            <div className="flex flex-col items self-center ml-4 text-gray-400">
              <span className="text-xl ml-1">Hi, I'm</span>
              <h1 className="text-5xl font-semibold text-white">
                Guilherme Pimentel
              </h1>
              <h2 className="text-3xl ml-1 font-medium text-sky-600/90">
                Fullstack developer
              </h2>
              <span className="text-md mt-1">📍Based in Brazil</span>

              {/* ICONS */}
              <div className="flex flex-row justify-center gap-2 mt-10 md:mt-4 md:justify-start">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  className="p-2 rounded-full text-gray-300 hover:bg-sky-600/90 cursor-pointer"
                >
                  <LuLinkedin size={20} />
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  className="p-2 rounded-full text-gray-300 hover:bg-sky-600/90 cursor-pointer"
                >
                  <LuGithub size={20} />
                </a>
                <button className="flex flex-row gap-2  items-center bg-sky-600/90 px-4 rounded-lg text-white cursor-pointer hover:bg-sky-500 duration-200">
                  <LuDownload /> Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
