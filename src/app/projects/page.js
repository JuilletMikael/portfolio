import Image from "next/image";
import Link from 'next/link';
import KartThemAll from '/public/projects/Kartthemall/kta-800-800.jpg';
import portfolio from '/public/projects/portfolio/portfolio-800-800.png';
import stellarmap from '/public/projects/stellarmap/stlm-800-800.png';
import Balltrap from "../../../public/projects/Balltrap/800-800.jpg";
import newsapp from "../../../public/projects/newsapp/800-800.jpg";
import weather from "../../../public/projects/weather/800-800.jpg";


export default function Page() {
    return (
        <div className="items-center mb-4">
            <h1 className="mb-8 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
                Projects
            </h1>

            <div>
                <div className="mx-auto">
                    <div
                        className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        <Link href="/projects/kartthemall" className="group">
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
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

                        <Link href="/projects/portfolio" className="group">
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

                        <Link href="/projects/stellarmap" className="group">
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

                        <Link href="/projects/Balltrap" className="group">
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <Image src={Balltrap} alt="KartThemAll present at NumerikGames festival"
                                       className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                            </div>
                            <Link href="/projects/Balltrap">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ball-trap</h5>
                            </Link>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Graph that shown the trajectory of a disc during a ball trap competition.
                            </p>
                        </Link>

                        <Link href="/projects/newsapp" className="group">
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <Image src={newsapp} alt="KartThemAll present at NumerikGames festival"
                                       className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                            </div>
                            <Link href="/projects/newsapp">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">News app</h5>
                            </Link>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Website using laravel to create and host a site of news.
                            </p>
                        </Link>

                        <Link href="/projects/weather" className="group">
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <Image src={weather} alt="KartThemAll present at NumerikGames festival"
                                       className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                            </div>
                            <Link href="/projects/weather">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">weather</h5>
                            </Link>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                A 3D web site of the current weather.
                            </p>
                        </Link>

                    </div>
                </div>
            </div>
        </div>

    );
}
