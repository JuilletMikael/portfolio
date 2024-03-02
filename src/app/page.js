import Image from "next/image";
import Link from 'next/link';
import KartThemAll from '/public/projects/Kartthemall/kta-800-800.jpg';
import Mail from '/public/Gmail_Logo_256px.png';
import Github from '/public/github-mark.png';
import Linkedin from '/public/LI-In-Bug.png';
import portfolio from "../../public/projects/portfolio/portfolio-800-800.png";
import stellarmap from "../../public/projects/stellarmap/stlm-800-800.png";

export default function Home() {
  return (
      <div className="p-4">
        <div className="mb-4">
          <div className="flex items-center h-24 rounded">
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
              &#x2022; Open To Work
            </span>
          </div>
        </div>
        <div className="items-center mb-4">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Programming a World of Tolerance in Every Byte.
          </h1>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4 ">
            I am a young student specializing in application development, with a passion for development, aeronautics and eco-innovation. Geographically mobile, I work on various projects of all kinds, from video games, mobile applications to electronic projects.
          </p>
          <Link href="/about"
             className="inline-flex border border-gray-800 items-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 hover:text-white rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none rounded-lg focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
            More about Me
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </Link>
        </div>

        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>

        <div className="items-center mb-4">

          <h2 className="text-4xl font-bold dark:text-white my-8">Recent Projects</h2>

          <div>
            <div className="mx-auto">
              <div
                  className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                <Link href="/projects/kartthemall" >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <Image src={KartThemAll} alt="KartThemAll present at NumerikGames festival"
                           className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                  </div>
                  <Link href="/projects/kartthemall">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">KartThemAll</h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Take on your friends in this frenetic party-game, dodging attacks with your kart and flying enemies off the track with bonus items thanks to its over-the-top physics.
                  </p>
                </Link>

                <Link href="/projects/portfolio">
                  <div
                      className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <Image src={portfolio} alt="KartThemAll present at NumerikGames festival"
                           className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                  </div>
                  <Link href="/projects/portfolio">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">My Portfolio</h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    I turned my portfolio into a showcase of not just my projects but also my tech skills.
                  </p>
                </Link>

                <Link href="/projects/stellarmap">
                  <div
                      className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <Image src={stellarmap} alt="KartThemAll present at NumerikGames festival"
                           className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                  </div>
                  <Link href="/projects/stellarmap">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">StellarMap</h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    StellarMap represent the solar system on an interactive 3D map.
                  </p>
                </Link>
              </div>

              <Link href="/projects"
                 className="inline-flex border border-gray-800 items-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 hover:text-white rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none rounded-lg focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                All Projects
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>

        <div className="items-center mb-4">
          <h2 className="text-4xl font-bold dark:text-white my-8">Let&#39;s connect</h2>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none">
              <Link href="mailto:juillet.mikael@gmail.com"><Image class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src={Mail} alt="Gmail" width="158" height="48"/></Link>
              <Link href="https://www.linkedin.com/in/mikael-juillet/"><Image class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src={Linkedin} alt="Linkedin" width="158" height="48"/></Link>
              <Link href="https://github.com/JuilletMikael"><Image class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src={Github} alt="GitHub" width="158" height="48"/></Link>
            </div>
          </div>
        </div>

      </div>

  );
}
