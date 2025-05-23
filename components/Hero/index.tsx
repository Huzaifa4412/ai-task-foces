"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import CountUp from "../CountUp/CountUp";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pt-35 pb-20 md:pt-40 xl:pt-46 xl:pb-25">
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2">
              <motion.h4
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                className="mb-4.5 text-4xl font-medium text-black dark:text-white"
              >
                <span className="text-primary text-5xl font-bold">
                  AI TASK FORCES{" "}
                </span>{" "}
                <span className="text-5xl font-bold text-amber-500">
                  Provides
                </span>{" "}
                <br />
                <Typewriter
                  options={{
                    strings: [
                      "Web development",
                      "AI Chat bot Integration",
                      "AI Calling Agents",
                      "AI Email Agents",
                      "AI Social Media Agents",
                      "SEO Optimization",
                      "Graphics Designing",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </motion.h4>
              <h1 className="xl:text-hero mb-5 pr-16 text-3xl font-bold text-black dark:text-white">
                <span className="before:bg-titlebg dark:before:bg-titlebgdark relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full">
                  AI TASK Forces
                </span>
              </h1>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              >
                Stop overpaying to waste your customers' time — Cresta AI Agent
                delivers human-like conversations that boost your bottom line.
              </motion.p>
              <br />
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              >
                Your 24/7 Digital Dream Team. without really being there!
              </motion.p>
              <div className="flex items-center justify-center gap-8">
                <div className="count-section mt-10 flex flex-col items-center">
                  <div>
                    <CountUp
                      from={0}
                      to={100}
                      separator=","
                      direction="up"
                      duration={1}
                      className="text-3xl font-bold text-amber-500"
                    />
                    <span className="text-2xl font-bold text-amber-500">+</span>
                  </div>
                  <div className="font-bold text-black dark:text-white">
                    AI Integrations
                  </div>
                </div>
                <div className="count-section mt-10 flex flex-col items-center">
                  <div>
                    <CountUp
                      from={0}
                      to={500}
                      separator=","
                      direction="up"
                      duration={1}
                      className="text-3xl font-bold text-amber-500"
                    />
                    <span className="text-2xl font-bold text-amber-500">+</span>
                  </div>
                  <div className="font-bold text-black dark:text-white">
                    Projects
                  </div>
                </div>
                <div className="count-section mt-10 flex flex-col items-center">
                  <div>
                    <CountUp
                      from={0}
                      to={200}
                      separator=","
                      direction="up"
                      duration={1}
                      className="text-3xl font-bold text-amber-500"
                    />
                    <span className="text-2xl font-bold text-amber-500">+</span>
                  </div>
                  <div className="font-bold text-black dark:text-white">
                    Happy Clients
                  </div>
                </div>
              </div>
              {/* <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="border-stroke shadow-solid-2 focus:border-primary dark:border-strokedark dark:focus:border-primary rounded-full border px-6 py-2.5 focus:outline-hidden dark:bg-black dark:shadow-none"
                    />
                    <button
                      aria-label="get started button"
                      className="hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out"
                    >
                      Get Started
                    </button>
                  </div>
                </form>

                <p className="mt-5 text-black dark:text-white">
                  Try for free no credit card required.
                </p>
              </div> */}
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute top-0 -left-11.5"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute right-0 bottom-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className="relative aspect-700/444 w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="shadow-solid-l hidden dark:block"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
