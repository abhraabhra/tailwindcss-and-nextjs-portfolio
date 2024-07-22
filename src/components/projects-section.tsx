import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./slide-up"
import { BsGithub, BsArrowUpRightSquare, BsArrowUpRight } from "react-icons/bs"
// import {Tooltip} from "@nextui-org/tooltip";


const projects = [
  {
    name: "Resumes Digital",
    description: "A platform specifically designed to assist MBA students in crafting impactful resumes that effectively showcase their skills and experience to potential employers.",
    image: "/resumes-digital.png",
    github: "",
    link: "https://resumes.digital",
    available: true,
  },
  {
    name: "CareerCarve.com",
    description:
      "Kator Family Photos is a photos and video digitization service in the LA area.",
    image: "/careercarve-com.png",
    github: "",
    link: "https://careercarve.com/",
    available: true,
  },
  {
    name: "Flow Builder",
    description:
      "A flow builder built using React-Flow, to ease and streamline the flow-creation process for any project.",
    image: "/flow-builder.png",
    github: "https://github.com/abhraabhra/chatbot-flow-builder",
    link: "https://chatbot-flow-builder-5000.netlify.app/",
    available: true,
  },
  {
    name: "Doink.Watch",
    description:
      "A Third Party Twitch App but Better and smoother with optimised animations.",
    image: "/doink-watch.png",
    github: "https://github.com/abhraabhra/doink.watch-twitch",
    link: "",
    available: false,
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {/* <div className="grid md:grid-cols-3 gap-8 md:gap-12"> */}
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    {project.available ?
                      <Link href={project.available ? project.link : ""} target="_blank">
                        <Image
                          src={project.image}
                          alt=""
                          width={1000}
                          height={1000}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                      </Link>
                      :
                      <div className="relative group">
                        <Image
                          src={project.image}
                          alt=""
                          width={1000}
                          height={1000}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
                          <div
                            className="mr-2 relative border-[#ADB7BE] hover:border-white group/link"
                          >
                            <p className="text-xl font-mono text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white">Coming Soon!</p>
                          </div>
                        </div>
                      </div>
                    }
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {!!project.github &&
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      }
                      {!!project.available &&
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      }
                    </div>
                  </div>
                </div>
              </SlideUp>
              {/* <div className="h-52 md:h-72 rounded-t-xl relative group" style={{
                background: `url(${project.image})`, backgroundSize: "cover"
              }}>
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
                  <Link
                    href={project.github}
                    className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                  >
                    <BsGithub className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                  </Link>
                  <Link
                    href={project.link}
                    className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                  >
                    <BsArrowUpRight className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                  </Link>
                </div>
              </div>
              <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
                <h5 className="text-xl font-semibold mb-2">{project.name}</h5>
                <p className="text-[#ADB7BE]">{project.description}</p>
              </div> */}
            </div>
          )
        })}

      </div>
    </section>
  )
}

export default ProjectsSection
