import Image from "next/image";
import portfolio from '/public/projects/cleavercooks/500-1200.png';

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
                                   Angular, Typescript, Capacitor, GraphQL
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

                    <div className="my-4">
                        <div className="mb-4">
                            <h5 className="text-xl font-bold text-black">Objective</h5>
                            <p className="text-left rtl:text-right text-gray-500">
                                The aim of this project is to develop an Android and Ios application that will enable users to list the foods in their kitchen and suggest recipes to match their needs.
                                In this application, it is possible to create, modify and delete recipes and ingredients, as well as link ingredients to the recipes created.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h5 className="text-xl font-bold text-black">My work</h5>
                            <p className="text-left rtl:text-right text-gray-500">
                                My job was to add the view as a link to the backend, enabling the user to interact with the application.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h5 className="text-xl font-bold text-black">What I learn</h5>
                            <p className="text-left rtl:text-right text-gray-500">
                                I learned how to make projects with Angular and implement a design using material 3.
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
