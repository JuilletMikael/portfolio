import Link from "next/link";
import Image from "next/image";
import eggflix from "../../../../public/projects/eggflix/Screenshot from 2024-05-21 07-17-34.png";

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
                EggFlix
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
                                    february 2024
                                </td>

                            </tr>
                            <tr className="bg-white border-b hover:bg-gray-50">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Stack
                                </th>
                                <td className="px-6 py-4">
                                    Javascript
                                </td>

                            </tr>
                            <tr className="bg-white hover:bg-gray-50">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Position
                                </th>
                                <td className="px-6 py-4">
                                    Backend developer
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <div
                        className="relative mx-auto border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                        <div className="rounded-xl overflow-hidden h-[140px] md:h-[262px]">
                            <Image className="w-full h-full" src={eggflix}
                                   alt="KartThemAll present at NumerikGames festival"/>
                        </div>
                    </div>
                    <div
                        className="relative mx-auto bg-gray-900 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"></div>
                    <div
                        className="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>
                </div>

            </div>
            <div className="my-4">
                <div className="mb-4">
                    <h5 className="text-xl font-bold text-black">Objective</h5>
                    <p className="text-left rtl:text-right text-gray-500">
                        This project was created during courses at CPNV with the aim of learning to use an SDK and to do
                        BDD testing.
                        To do this, I created with a classmate a website for online sales of films that integrates language
                        language management and online connection to the facebook SSO service.
                    </p>
                </div>
                <div className="mb-4">
                    <h5 className="text-xl font-bold text-black">My work</h5>
                    <p className="text-left rtl:text-right text-gray-500">
                        My job was to think up and carry out BDD tests prior to feature development, coupled with class diagrams, with the aim of enabling another person to code based on my code.
                        on my code.
                        So I learned to make mocks, to use selenium in order to make high-level tests and thus try to have the best code coverage.
                    </p>
                </div>
                <div className="mb-4">
                    <h5 className="text-xl font-bold text-black">Dificultes</h5>
                    <p className="text-left rtl:text-right text-gray-500">
                        Difficulties arose in the creation of the architecture and the project, given that we wanted to create an app with a good separation of conscerns.
                        conscern. It was difficult to separate each part.
                    </p>
                </div>
            </div>
        </div>

    );
}
