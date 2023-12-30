import Link from "next/link";
import Image from "next/image";

// components
import { Button } from "./ui/button";
import { Send, Download } from "lucide-react";
import Azuki from "../public/azuki.png";
const Introduction = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-15">
      <div className="container mx-auto">
        <div className="flex justify-between">
          {/* text */}
          <div className="flex flex-col max-w-prose">
            <div className="flex w-fit items-center border-b pb-2">
              <h2 className="h2">Hey, I'm Harry Nguyen</h2>
              <span className="animate-wave text-5xl">✌️</span>
            </div>
            <p className="sub-title mt-6 mx-auto xl:mx-0">
              I'm 20 years old. I'm studying Software Engineering at the{" "}
              <a target="_blank" href="https://www.uit.edu.vn/">
                Information of Technology University
              </a>{" "}
              in VietNam. I'm extremely curious and on passion of Blockchain.
              Currently I'm still learning more knowledge and looking for jobs
              in Blockchain industry. I'm willing to learn and connect with
              others around the World.
            </p>
            <div className="opacity-30 mx-auto xl:mx-0">
              Also, contact me if you have any questions. Please call me as
              Harry !
            </div>
          </div>
          {/* image and buttons */}
          <div className="flex flex-col max-w-prose items-center gap-10">
            {/* image */}
            <div className="flex md:flex-col md:items-start md:justify-items-start items-center justify-center mx-auto">
              <Image
                src={Azuki}
                alt="/"
                className=" h-40 w-40 rounded-full grayscale transition-all duration-300 hover:rotate-15 hover:scale-110 hover:grayscale-0 max-w-prose"
              />
            </div>
            {/* buttons */}
            <div className="mt-6 flex xl:gap-x-10 flex-col md:flex-row gap-y-5 mx-auto">
              <Link href="/contact">
                <Button className="flex gap-x-2">
                  Contact me <Send size={14} />
                </Button>
              </Link>
              <Button variant="secondary" className="flex gap-x-2">
                My Resume <Download size={14} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
