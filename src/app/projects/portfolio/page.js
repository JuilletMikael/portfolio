import Image from "next/image";
import portfolio from '/public/projects/portfolio/portfolio-500-1200.png';

import Link from "next/link";

export default function Page() {
    return (
        <div className="items-center mb-4">
            <Link href="/projects"
                  className="inline-flex items-center py-2.5 text-sm font-medium text-center text-gray-900 hover:text-white rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none rounded-lg focus:ring-gray-300">
                <svg className="w-3.5 h-3.5 me-2 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                Go Back To Projects
            </Link>

            <h1 className="mb-8 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl">
                Portfolio
            </h1>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-2">
                <div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                            <tbody>
                            <tr className="bg-white border-b hover:bg-gray-50">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Duration
                                </th>
                                <td className="px-6 py-4">
                                    February 2024
                                </td>

                            </tr>
                            <tr className="bg-white border-b hover:bg-gray-50">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Stack
                                </th>
                                <td className="px-6 py-4">
                                   Nextjs, Tailwind, Flowbite
                                </td>

                            </tr>
                            <tr className="bg-white hover:bg-gray-50">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Position
                                </th>
                                <td className="px-6 py-4">
                                    Developer, Designer
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <Link href="https://github.com/JuilletMikael/portfolio"
                       className=" mt-4 inline-flex border border-gray-800 items-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 hover:text-white rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none rounded-lg focus:ring-gray-300">
                        Project on Github
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>

                    <div className="my-4">
                        <div className="mb-4">
                            <h5 className="text-xl font-bold text-black">Objective</h5>
                            <p className="text-left rtl:text-right text-gray-500">
                                In 2022, I started a course that delved into the creation of an online portfolio. For this course, I
                                crafted my inaugural portfolio, a significant endeavor tainted by numerous issues in
                                both its structure and user experience (UX). It was this pivotal moment that spurred me
                                to initiate a complete overhaul two years later, aiming to showcase my work on a site
                                that truly reflected the quality of my projects.
                                <br/><br/>
                                In the pursuit of a seamless user experience, I drew inspiration from the portfolios of
                                fellow developers, carefully considering their design elements. Employing components
                                from Flowbite and Tailwind CSS, I meticulously crafted a new design that not only
                                addressed the UX concerns of the previous iteration but also embodied a visually
                                appealing and user-friendly interface.

                            </p>
                        </div>
                        <div className="mb-4">
                            <h5 className="text-xl font-bold text-black">My work</h5>
                            <p className="text-left rtl:text-right text-gray-500">
                                This redesign venture was not merely about aesthetics; it represented a comprehensive
                                improvement in functionality and user interaction. By incorporating the principles of
                                Tailwind CSS and delving into the intricacies of JavaScript, I brought to life a
                                portfolio that seamlessly showcased my projects and skills. The integration of these
                                technologies not only elevated the visual appeal but also optimized the overall user
                                journey.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h5 className="text-xl font-bold text-black">What I learn</h5>
                            <p className="text-left rtl:text-right text-gray-500">
                                The portfolio overhaul served as a profound learning experience, allowing me to refine
                                my skills in Tailwind CSS, deepen my understanding of JavaScript, and venture into the
                                realm of UI/UX design. The meticulous planning and execution involved in redesigning the
                                user interface with Figma honed my ability to envision and create aesthetically pleasing
                                and intuitive digital spaces.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h5 className="text-xl font-bold text-black">Dificultes</h5>
                            <p className="text-left rtl:text-right text-gray-500">
                                One of the significant challenges encountered in this process was ensuring the
                                responsiveness of the website across various devices. Navigating the intricacies of
                                responsive design demanded careful consideration of breakpoints, flexible grids, and
                                media queries. Despite the complexity, overcoming this challenge not only enhanced the
                                user experience but also enriched my skill set in crafting adaptive and accessible
                                digital interfaces.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                    <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                    <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                    <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px]">
                        <Image src={portfolio}
                             className="block" alt=""/>
                    </div>
                </div>

            </div>
        </div>

    );
}
