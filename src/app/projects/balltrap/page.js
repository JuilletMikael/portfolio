import Link from "next/link";
import Image from "next/image";
import balltrap from "/public/projects/balltrap/800-800.jpg"

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
                Ball trap
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
                                    January 2024
                                </td>

                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Stack
                                </th>
                                <td className="px-6 py-4">
                                    Python
                                </td>

                            </tr>
                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Position
                                </th>
                                <td className="px-6 py-4">
                                    Developer
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <a href="https://github.com/JuilletMikael/Ball-trap"
                       className="mt-4 inline-flex border border-gray-800 items-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 hover:text-white rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none rounded-lg focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                        GitHub Project
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>

                </div>

                <div>
                    <div
                        className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                        <div className="rounded-xl overflow-hidden h-[140px] md:h-[262px]">
                            <Image className="w-full h-full" src={balltrap} alt="KartThemAll present at NumerikGames festival"/>
                        </div>
                    </div>
                    <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"></div>
                    <div className="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>
                </div>

            </div>
            <div className="my-4">
                <div className="mb-4">
                    <h5 className="text-xl font-bold dark:text-white text-black">Objective</h5>
                    <p className="text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        The primary goal of this project is to conduct a detailed study of the disc&#39;s behavior from the
                        moment it is launched by the machine until the point where the ball hits it. The disc is
                        considered as a point mass moving in a parabolic trajectory. This parabola is predetermined and
                        not subject to parameters.
                    </p>
                </div>
                <div className="mb-4">
                    <h5 className="text-xl font-bold dark:text-white text-black">My work</h5>
                    <p className="text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        The development process involves creating a Python program to visualize the disc&#39;s trajectory
                        and determine the point of impact with the shot. The program allows users to set the angle and
                        location of the shot, represented by a line in the same plane as the predetermined parabola. The
                        interface is designed with careful consideration for user experience.

                        The resolution of the interception between the parabola and the line is implemented with a
                        systematic approach, leveraging knowledge of solving systems. The final presentation of the
                        program demonstrates the winning shot and the time it takes to execute, providing a clear and
                        visually appealing representation of the disc&#39;s movement.
                    </p>
                </div>
                <div className="mb-4">
                    <h5 className="text-xl font-bold dark:text-white text-black">What I learn</h5>
                    <p className="text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Throughout this project, I have honed my skills in Python programming, system-solving
                        techniques, and user interface design, ensuring that the program meets the specified objectives
                        effectively.
                    </p>
                </div>
            </div>
        </div>

    );
}
