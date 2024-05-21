import Image from "next/image";
import Link from 'next/link';
import kartThemAll from '/public/projects/kartthemall/kta-800-800.jpg';
import portfolio from '/public/projects/portfolio/portfolio-800-800.png';
import stellarmap from '/public/projects/stellarmap/stlm-800-800.png';
import balltrap from "../../../public/projects/balltrap/800-800.jpg";
import newsapp from "../../../public/projects/newsapp/800-800.jpg";
import weather from "../../../public/projects/weather/800-800.jpg";
import eggflix from "../../../public/projects/eggflix/800-800.png";
import zangularhome from "../../../public/projects/zangularhome/800-800.png";
import cleavercooks from "../../../public/projects/cleavercooks/800-800.png";


export default function Page() {
    return (
        <div className="items-center mb-4">
            <h1 className="mb-8 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl">
                Projects
            </h1>

            <div>
                <div className="mx-auto">
                    <div
                        className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        <Link href="/projects/kartthemall" className="group">
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <Image src={kartThemAll} alt="KartThemAll present at NumerikGames festival"
                                       className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                            </div>
                            <Link href="/projects/kartthemall">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">KartThemAll</h5>
                            </Link>
                            <p className="mb-3 font-normal text-gray-700">
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
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">My Portfolio</h5>
                            </Link>
                            <p className="mb-3 font-normal text-gray-700">
                                I turned my portfolio into a showcase of not just my projects but also my tech skills.
                            </p>
                        </Link>

                        <Link href="/projects/zangularhome" className="group">
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <Image src={zangularhome} alt="KartThemAll present at NumerikGames festival"
                                       className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                            </div>
                            <Link href="/projects/zangularhome">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">ZangularHome</h5>
                            </Link>
                            <p className="mb-3 font-normal text-gray-700">
                                An application that control lights in a house.
                            </p>
                        </Link>

                        <Link href="/projects/eggflix" className="group">
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <Image src={eggflix} alt="KartThemAll present at NumerikGames festival"
                                       className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                            </div>
                            <Link href="/projects/eggflix">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">EggFlix</h5>
                            </Link>
                            <p className="mb-3 font-normal text-gray-700">
                                Web site of movie rental service that use facebook SDK.
                            </p>
                        </Link>

                        <Link href="/projects/cleavercooks" className="group">
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <Image src={cleavercooks} alt="KartThemAll present at NumerikGames festival"
                                       className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                            </div>
                            <Link href="/projects/cleavercooks">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">CleaverCooks</h5>
                            </Link>
                            <p className="mb-3 font-normal text-gray-700">
                                an application that identifies the food in our kitchen and suggests recipes based on what we have.
                            </p>
                        </Link>

                        <Link href="/projects/stellarmap" className="group">
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <Image src={stellarmap} alt="KartThemAll present at NumerikGames festival"
                                       className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                            </div>
                            <Link href="/projects/stellarmap">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">StellarMap</h5>
                            </Link>
                            <p className="mb-3 font-normal text-gray-700">
                                StellarMap represent the solar system on an interactive 3D map.
                            </p>
                        </Link>

                        <Link href="/projects/balltrap" className="group">
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <Image src={balltrap} alt="KartThemAll present at NumerikGames festival"
                                       className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                            </div>
                            <Link href="/projects/balltrap">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Ball-trap</h5>
                            </Link>
                            <p className="mb-3 font-normal text-gray-700">
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
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">News app</h5>
                            </Link>
                            <p className="mb-3 font-normal text-gray-700">
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
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">weather</h5>
                            </Link>
                            <p className="mb-3 font-normal text-gray-700">
                                A 3D web site of the current weather.
                            </p>
                        </Link>

                    </div>
                </div>
            </div>
        </div>

    );
}
