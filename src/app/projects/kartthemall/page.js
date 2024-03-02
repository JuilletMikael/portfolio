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
                KartThemAll
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
                                    July 2023 - Present
                                </td>

                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                   Stack
                                </th>
                                <td className="px-6 py-4">
                                    Unity, Blender, C#, Jira
                                </td>

                            </tr>
                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Position
                                </th>
                                <td className="px-6 py-4">
                                    Game Dev, Design, Communication
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <Link href="https://apgames.ch/en/game/kart-them-all"
                       className="mt-4 inline-flex border border-gray-800 items-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 hover:text-white rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none rounded-lg focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                        AwesomeProjection
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>
                </div>

                <div>
                    <div
                        className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                        <div className="rounded-xl overflow-hidden h-[140px] md:h-[262px]">
                            <Image src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac.png"
                                 className="dark:hidden h-[140px] md:h-[262px] w-full rounded-xl" alt=""/>
                            <video className="w-full h-full" autoPlay muted controls>
                                <source src="/projects/Kartthemall/kta.mp4" type="video/mp4"/>
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
                        During my final year of vocational training in computer science, I had the honor of being
                        selected with two of my colleagues by my supervisor to develop a game for presentation at
                        the prestigious <Link href="https://www.numerik-games.ch/" className="hover:text-sky-500 focus:text-sky-500 underline decoration-sky-500">
                        Numerikgames Festival</Link>, an iconic event celebrating innovation in the field
                        of video games. Our challenging mission was to create a captivating game demo within a tight
                        three-month timeframe.
                        <br/>
                        After meticulous deliberation, we chose to embark on the creation of an original party game
                        centered around the theme of karts, characterized by exaggerated physics, drawing
                        inspiration from the playful aesthetics of renowned games such as Rubber Bandits, Fall Guys, Mario Kart and Gang beast.
                        <br/><br/>
                        Game pitch :
                        <i>
                            `&#34;Face your friends in this frenetic party-game, dodging attacks with your kart and sending
                            enemies flying off the track with bonus items thanks to its over-the-top physics.`&#34;
                        </i>
                    </p>
                </div>
                <div className="mb-4">
                    <h5 className="text-xl font-bold dark:text-white">NumerikGames festival</h5>
                    <p className="text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Our participation in the Numerik Games Festival yielded a remarkable experience, characterized
                        by an influx of visitors, positive feedback on our game, and meaningful connections within the
                        gaming industry. The festival served as an extraordinary platform for us to showcase our
                        innovative party game centered around the theme of karts.
                    </p>
                </div>
                <div className="mb-4">
                    <h5 className="text-xl font-bold dark:text-white">My work</h5>
                    <p className="text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        My central role encompassed the meticulous design of maps and their blocking, involving
                        conceptualization, drawing, and adaptation to the flow of players to create an immersive gaming
                        environment. To achieve this ambitious goal, I leveraged my skills in modeling with Blender,
                        mastering the art of creating and modifying decorative elements. Expert use of Unity was
                        essential for implementing the scenery and its interactions with the player.
                        <br/><br/>
                        My contribution extended to the realization of various objects and actions on Unity, requiring
                        adjustments or the creation of code in the C# language. Additionally, I am involved in
                        communication on various social media platforms, orchestrating the regular dissemination of
                        content twice a week to build an engaged community.
                    </p>
                </div>
                <div className="mb-4">
                    <h5 className="text-xl font-bold dark:text-white">What I learn</h5>
                    <p className="text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        This significant project allowed me to refine my time management and enhance my teamwork skills,
                        both crucial qualities in a game development environment. I gained substantial expertise with
                        Unity, further solidifying my programming skills in C#. Simultaneously, I had the opportunity to
                        showcase my knowledge in video editing, actively contributing to the creation and regular
                        release of captivating videos.
                    </p>
                </div>
                <div className="mb-4">
                    <h5 className="text-xl font-bold dark:text-white">Dificultes</h5>
                    <p className="text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Although exciting, the project was not without its challenges. My main difficulty lies in
                        accurately estimating the duration of tasks. My inclination towards optimism regarding task
                        durations sometimes led to tight deadlines, requiring increased commitment and stress
                        management.
                    </p>
                </div>
                <div className="mb-4">
                    <h5 className="text-xl font-bold dark:text-white">Future</h5>
                    <p className="text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        I maintain active involvement in this project, collaborating diligently with my colleagues
                        outside of working hours to continue refining it. Our ultimate goal is to publish it on video
                        game sales platforms, thereby realizing the outcome of our hard work and shared passion.
                    </p>
                </div>

            </div>
        </div>

    );
}
