import Link from "next/link";

// components
import DevImage from "./DevImage";
import { Button } from "./ui/button";
import { Send, Download } from "lucide-react";

const Introduction = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-15">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
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
            {/* buttons */}
            <div className="mt-6 flex gap-x-10 flex-col md:flex-row gap-y-5 mx-auto">
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

          {/* image */}
          <div className="hidden xl:flex relative">image</div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
