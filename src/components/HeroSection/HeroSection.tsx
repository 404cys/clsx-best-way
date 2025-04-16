import Navbar from "../NavBar/NavBar";
import Link from "next/link";
import Image from "next/image";
export default function HeroSection() {
return (
<>
  <Navbar />
  <main className="w-full">
    <section className="relative pt-10 xl:pt-14">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">
        <div className="mx-auto text-center lg:text-left flex flex-col max-w-3xl justify-center lg:justify-start lg:py-8 flex-1 lg:w-1/2 lg:max-w-none">
          <h1 className=" text-white text-4xl/snug sm:text-6xl/tight lg:text-5xl/tight xl:text-6xl/tight font-semibold text">
            Give Up <img
                src="/raised-hand-with-fingers-splayed_1f590.png" 
                alt="Raised Hand" 
                className="w-10 h-10 md:w-15 md:h-15 object-cover  lg:w-15 lg:h-15 inline-block align-middle" 
            />  <br /> dont Use ClassName  normaly<br /> <span className="inline-block bg-indigo-600 rotate-[-3deg] border-y-indigo-400 mx-2">Clsx</span> <span className=" mask-b-from-10%  ">best Way! </span>
          </h1>
          <p className="mt-10  text-gray-300 lg:text-lg max-w-2xl lg:max-w-none mx-auto">
          A tiny (239B) utility for constructing className strings conditionally.
          Also serves as a faster & smaller drop-in replacement for the classnames module.
          </p>
          <div className="mt-10 flex gap-4 justify-center lg:justify-start flex-wrap">
            <Link href="https://www.npmjs.com/package/clsx" className="relative px-6 py-3 before:absolute before:inset-0 before:rounded-lg before:transition active:before:bg-indigo-700 text-white hover:before:bg-indigo-800 before:bg-indigo-600 hover:before:scale-105">
              <span className="relative">
                Clsx npm
              </span>
            </Link>
            <Link href="#" className="relative px-6 py-3 before:absolute before:inset-0 before:rounded-lg before:transition before:bg-gray-100 dark:before:bg-gray-900 text-black dark:text-white hover:before:scale-105">
              <span className="relative">
                Get Started
              </span>
            </Link>
          </div>
        </div>
        <div className="flex flex-1 lg:w-1/2 relative max-w-3xl mx-auto lg:max-w-none">
            <div className="absolute rounded-r-4xl top-0 left-0 h-24 w-2/3 bg-gradient-to-br from-blue-400 blur-3xl opacity-100 z-0" />
            <div className="absolute rounded-4xl bottom-0 right-0 h-20 w-3/5 bg-gradient-to-r from-blue-700 blur-2xl opacity-40 z-0" />
             <Image
                src="/Clsx.png"
                alt="happy team"
                width={1850}
                height={1200}
                className="relative rounded-2xl z-10 lg:rounded-2xl w-full object-cover lg:h-full"
            />
</div>
</div>
    </section>
  </main>
</>
)
}