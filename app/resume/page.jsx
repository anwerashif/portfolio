"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaVuejs } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiShopify, SiPhp, SiMysql, SiWoocommerce, SiGit } from "react-icons/si";

import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";

// about page data
const about = {
  title: "About Me",
  description: "I'm a Front-End Developer & E-Commerce Specialist with 6+ years of experience building high-performing websites, sales funnels, and automated workflows",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Anwer Ashif"
    },
    {
      fieldName: "Email",
      fieldValue: "iamanwerashif@gmail.com"
    },
    {
      fieldName: "WhatsApp",
      fieldValue: "(+880) 1768 334 883"
    },
    {
      fieldName: "Experience",
      fieldValue: "6+ Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi"
    },
    {
      fieldName: "Remote Work",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Bengali",
    },
  ]
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "With deep expertise in Shopify, WooCommerce, WordPress, Funnelish, ClickFunnels, and GoHighLevel, I help businesses increase sales through high-converting landing pages, CRO (Conversion Rate Optimization), and seamless API integrations.",
  items: [
    {
      company: "Ginigo Ltd.",
      position: "Web Developer",
      duration: "2023 - Present",
      casestudy: "https://ginigo.com",
    },
    {
      company: "On Track Meals Pty Ltd.",
      position: "Shopify Store Developer",
      duration: "2023 - 2024",
      casestudy: "https://ginigo.com",
    },
    {
      company: "Vest Media Group LLC",
      position: "WooCommerce & Clickfunnels Expert",
      duration: "2023 - 2024",
      casestudy: "https://ginigo.com",
    },
    {
      company: "Natakallam",
      position: "Freelance WordPress Designer",
      duration: "2022 - 2023",
      casestudy: "https://ginigo.com",
    },
    {
      company: "Fiverr",
      position: "Freelance Sales Funnel Expert",
      duration: "2019 - 2023",
      casestudy: "https://ginigo.com",
    },
    {
      company: "Upwork",
      position: "Freelance Shopify Expert",
      duration: "2018 - 2023",
      casestudy: "https://ginigo.com",
    },
  ]
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "I have a strong educational background in web development and e-commerce, with hands-on experience in various technologies and platforms.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Codecademy",
      degree: "Front-end Track",
      duration: "2022",
    },
    {
      institution: "Harvard University - Online Course",
      degree: "Computer Science Engineering",
      duration: "2020-2021",
    },
    {
      institution: "Sololearn",
      degree: "Certified Web Developer",
      duration: "2019",
    },
    {
      institution: "W3Schools",
      degree: "HTML, CSS, JavaScript",
      duration: "2018",
    },
    {
      institution: "IT Institute",
      degree: "UI/UX Design Concept",
      duration: "2017",
    },
  ]
};

// Skills data
const skills = {
  title: "My Skills",
  description: "Proficient in modern web technologies and tools, including HTML5, CSS3, JavaScript, React, Node.js, and more, with a focus on creating responsive and user-friendly web applications.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaVuejs />,
      name: "Vue.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiPhp />,
      name: "PHP",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiShopify />,
      name: "Shopify",
    },
    {
      icon: <SiWoocommerce />,
      name: "WooCommerce",
    },
    {
      icon: <SiGit />,
      name: "Git - Version Control",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto px-4">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w[260px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                          <div className="flex justify-center xl:justify-start min-h-[30px]">
                            <Link href={item.casestudy} className="flex items-center gap-2 group hover:text-accent transition-all duration-500">
                            View Case Study
                              <BsArrowUpRight className="text-white group-hover:rotate-45 group-hover:text-accent transition-all duration-500" />
                            </Link>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[700px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;