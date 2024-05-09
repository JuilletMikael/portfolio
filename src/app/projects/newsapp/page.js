import Link from "next/link";
import Image from "next/image";
import balltrap from "/public/projects/newsapp/800-800.jpg"

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
                News app
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
                                    December 2023
                                </td>

                            </tr>
                            <tr className="bg-white border-b hover:bg-gray-50">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Stack
                                </th>
                                <td className="px-6 py-4">
                                    PHP, Laravel
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
                    <a href="https://github.com/JuilletMikael/PRW1-News-App"
                       className="mt-4 inline-flex border border-gray-800 items-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 hover:text-white rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none rounded-lg focus:ring-gray-300">
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
                        className="relative mx-auto border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                        <div className="rounded-xl overflow-hidden h-[140px] md:h-[262px]">
                            <Image className="w-full h-full" src={balltrap} alt="KartThemAll present at NumerikGames festival"/>
                        </div>
                    </div>
                    <div className="relative mx-auto bg-gray-900 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"></div>
                    <div className="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>
                </div>

            </div>
            <div className="my-4">
                <div className="mb-4">
                    <h5 className="text-xl font-bold text-black">Objective</h5>
                    <p className="text-left rtl:text-right text-gray-500">
                        The primary aim of this project is to develop a robust news management system using PHP with the
                        Laravel framework. The goal is to create a user-friendly platform that efficiently handles the
                        creation, editing, and presentation of news articles. Users will experience a seamless and
                        intuitive interface for managing news content with the added benefit of advanced features.
                    </p>
                </div>
                <div className="mb-4">
                    <h5 className="text-xl font-bold text-black">My work</h5>
                    <p className="text-left rtl:text-right text-gray-500">
                        The development process involves a meticulous approach, leveraging the Laravel framework for
                        efficient PHP development. The frontend is crafted using a combination of HTML, CSS, and
                        JavaScript to create a visually appealing and interactive news platform. Integration with
                        Laravel&#39;s Eloquent ORM ensures a smooth interaction with the database, facilitating easy content
                        management. The system&#39;s security is reinforced through Laravel&#39;s built-in authentication
                        system, safeguarding user accounts and data.
                    </p>
                </div>
                <div className="mb-4">
                    <h5 className="text-xl font-bold text-black">What I learn</h5>
                    <p className="text-left rtl:text-right text-gray-500">
                        Throughout this project, I&#39;ve deepened my proficiency in PHP, specifically within the Laravel
                        framework, enhancing my skills in database management, security implementation, and frontend
                        development. The project has provided valuable insights into creating user-friendly interfaces
                        for content management systems, emphasizing a balance between aesthetics and functionality.
                    </p>
                </div>
            </div>
        </div>

    );
}
