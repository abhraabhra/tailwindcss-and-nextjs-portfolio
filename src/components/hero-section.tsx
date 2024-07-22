"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll/modules";
import Link from "next/link"
import { HiArrowDown } from "react-icons/hi";
import { BsArrowUpRight } from "react-icons/bs";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot-animated-png.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Abhra!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Software Engineer{" "}
            </span>
            based in Bengaluru, India. Working towards creating software that
            makes life easier and more meaningful.
          </p>
          <div className="flex gap-x-5">
            <ScrollLink
              to="projects"
              className="text-neutral-100 font-bold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 hover:-translate-y-1 transition-transform cursor-pointer"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </ScrollLink>
            <Link
              href={"https://drive.google.com/file/d/1r4wmniZVIL7UTzqBXO4lzrMCrzmyD1RM/view?usp=sharing"}
              className="flex items-center justify-center gap-x-2 text-neutral-100 font-bold px-6 py-3 border border-white rounded-md shadow hover:-translate-y-1 transition-transform cursor-pointer"
              target="_blank"
            >
              Resume <BsArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <ScrollLink
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </ScrollLink>
      </div>
    </section>
  );
};

export default HeroSection;
