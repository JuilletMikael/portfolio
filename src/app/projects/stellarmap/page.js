import Link from "next/link";
import Image from "next/image";

export default function Page() {
    return (
        <div className="items-center mb-4">
            <Link href="/projects"
                  className="inline-flex items-center py-2.5 text-sm font-medium text-center text-gray-900 hover:text-white rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none rounded-lg focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                <svg className="w-3.5 h-3.5 me-2 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                Go Back To Projects
            </Link>

            <h1 className="mb-8 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
                StellarMap
            </h1>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-2">
                <div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Duration
                                </th>
                                <td className="px-6 py-4">
                                    June 2023 (90 hours)
                                </td>

                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Stack
                                </th>
                                <td className="px-6 py-4">
                                    Vite, ViteTest, Threejs
                                </td>

                            </tr>
                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Position
                                </th>
                                <td className="px-6 py-4">
                                    Developer, Designer
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <a href="https://github.com/JuilletMikael/TPI-stellarmap-3D"
                       className="mt-4 inline-flex border border-gray-800 items-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 hover:text-white rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none rounded-lg focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                        GitHub Project
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>

                    <a href="https://stellarmap.mycpnv.ch/"
                        className="relative inline-flex items-center justify-center ml-4 p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span
                            className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            View The Site
                        </span>
                    </a>
                </div>

                <div>
                    <div
                        className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                        <div className="rounded-xl overflow-hidden h-[140px] md:h-[262px]">
                            <video className="w-full h-full" autoPlay muted controls>
                                <source src="/projects/stellarmap/stlm.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"></div>
                    <div className="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>
                </div>

            </div>
            <div className="my-4">
                <div className="mb-4">
                    <h5 className="text-xl font-bold dark:text-white">Objective</h5>
                    <p className="text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        The primary goal of this project is to create an interactive 3D map of the solar system,
                        allowing users to explore and discover the planets and their satellites. The interactive map
                        will enable users to orbit around the sun and observe planets from different angles. When
                        clicking on a planet, a description will be displayed, and users can accelerate the planets&#39;
                        movement speed. Specific objectives include displaying all eight planets on the map, enabling
                        user navigation, ensuring ergonomic and user-friendly product design, showing planet information
                        on clicks, creating a responsive site usable on smartphones or tablets, allowing users to modify
                        planet movement speed, and enabling user-determined viewing angles of the system.
                    </p>
                </div>
                <div className="mb-4">
                    <h5 className="text-xl font-bold dark:text-white">My work</h5>
                    <p className="text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        The development process involves meticulous attention to detail, employing technologies like
                        Tailwind CSS and JavaScript for the frontend, ensuring both aesthetic appeal and functional
                        robustness. The backend implementation integrates <Link href="https://ssd.jpl.nasa.gov/horizons/" className="hover:text-sky-500 focus:text-sky-500 underline decoration-sky-500">
                        NASA&#39;s APIs</Link>, specifically utilizing the
                        &#34;Horizon View&#34; API for precise spatial object information and the &#34;Near Earth Object&#34; API for
                        approximating the placement of asteroids in proximity to Earth. The development is aligned with
                        the established evaluation criteria set by the Canton of Vaud, emphasizing the creation of a 3D
                        solar system visualization accessible on various devices. The culmination of this effort will be
                        presented on June 12th at 2:50 pm in room C315 at the professional center in Sainte-Croix.
                    </p>
                </div>
                <div className="mb-4">
                    <h5 className="text-xl font-bold dark:text-white">What I learn</h5>
                    <p className="text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Throughout this project, I enhanced my skills in Tailwind CSS, delved into JavaScript, and
                        ventured into UI/UX design using Figma. The redesign aimed not only at aesthetic improvements
                        but also at enhancing functionality and user interaction. Challenges were overcome in ensuring
                        the site&#39;s responsiveness across different devices, contributing to my knowledge of crafting
                        adaptive and accessible digital interfaces.
                    </p>
                </div>
                <div className="mb-4">
                    <h5 className="text-xl font-bold dark:text-white">Dificultes</h5>
                    <p className="text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        One significant challenge faced during the project was ensuring the responsiveness of the
                        website, demanding careful consideration of breakpoints, flexible grids, and media queries.
                        Overcoming this challenge not only improved the user experience but also added a valuable skill
                        set to my repertoire in crafting adaptive and accessible digital interfaces.
                    </p>
                </div>
                <div className="mb-4">
                    <h5 className="text-xl font-bold dark:text-white">Future</h5>
                    <p className="text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        In the course of 2024, I would like to improve this project by applying kepler&#39;s and newton&#39;s laws
                        in order to have accurate planet displacements, and I will take the opportunity to improve the
                        site&#39;s UI.
                    </p>
                </div>

            </div>
        </div>

    );
}
