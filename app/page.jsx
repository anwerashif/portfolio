import { FiDownload } from 'react-icons/fi';
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from '@/components/Stats';
import Link from "next/link";

const Home = () => {
  return <section className="h-full">
    <div className="container mx-auto px-4 h-full">
      <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">
        {/* Left - Text */}
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Front-End Developer</span>
          <h1 className="h1 mb-6">Hello, I'm <br /><span className="text-accent">Anwer Ashif</span></h1>
          <p className="max-w-[500px] mb-9 text-white/80">I help businesses increase sales through high-converting landing pages, CRO (Conversion Rate Optimization), and seamless API integrations.</p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Link href="https://docs.google.com/document/d/1Jqte55JodJfN1rwC6_sVXopSzYog6HarDNb-SOUrDF4/edit?usp=sharing" className="justify-center whitespace-nowrap rounded-full font-semibold ring-offset-white transition-colors border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary h[56px] px-6 text-sm tracking-[2px] uppercase flex items-center gap-2 py-3">
              <span>Download CV</span>
              <FiDownload className="text-xl" />
            </Link>
            <div className="mb-8 xl:mb-0">
              <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
            </div>
          </div>
        </div>
        {/* Right - Photo */}
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>
    </div>
    <Stats />
  </section>;
}

export default Home;