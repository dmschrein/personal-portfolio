import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients"
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa"
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach"
import Footer from "@/components/Footer"
import About from "@/components/About";
import Story from "@/components/Story";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <About />
        <Experience />
        <Story />
        {/* <Grid /> */}
        <RecentProjects />
        <Clients />
        
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
