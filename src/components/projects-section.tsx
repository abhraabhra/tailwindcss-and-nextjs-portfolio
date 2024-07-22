import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./slide-up"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
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
    link: "Coming soon!",
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
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.available ? project.link : ""} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
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
                      <Link href={project.available ? project.link : ""} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}

      </div>
    </section>
  )
}

export default ProjectsSection
