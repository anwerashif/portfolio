"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: '01',
    title: 'Automation & AI',
    description: 'I use automation and AI to streamline workflows, boost efficiency, and help businesses scale effortlessly.',
    href: '/services/automation-ai',
  },
  {
    num: '02',
    title: 'E-Commerce',
    description: 'I build high-performance online stores with seamless user experiences to drive sales and customer engagement.',
    href: '/services/e-commerce',
  },
  {
    num: '03',
    title: 'API Integration',
    description: 'I connect different platforms and services through API integration to enhance functionality and improve efficiency.',
    href: '/services/api-integration',
  },
  {
    num: '04',
    title: 'CRO (Conversion Rate Optimization)',
    description: 'I optimize websites and sales funnels to increase conversions, maximize revenue, and improve user experience.',
    href: '/services/cro',
  }
];



const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0}} 
          animate={{ 
            opacity: 1,
            transition: {
              duration: 0.4,
              delay: 2.4,
              ease: "easeIn"
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div 
              key={index} 
              className="flex-1 flex flex-col justify-center gap-6 group">
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-outline-hover text-transparent transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;