import Link from "next/link";

export default function Page() {
    return (
        <div className="items-center mb-4">
            <section className="p-4">
                <div className="pb-4">
                    <div className="mb-4">
                        <div className="flex items-center h-24 rounded">
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                              &#x2022; Open To Work
                            </span>
                        </div>
                    </div>
                    <div className="items-center mb-4">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
                            Mikael Juillet
                        </h1>
                        <p className="text-lg font-normal text-gray-500 mb-4 ">
                            I&#39;m a 21 years old Swiss student technician with a passion for computer science, which I started
                            to learn it 4 years ago.
                            Ecologically aware, traveler, rigorous in my work and always looking for new challenges, I work
                            on several projects of all kinds, that you can find below.
                        </p>
                    </div>
                </div>

                <h2 className="text-4xl font-bold mb-4 mt-8">Trainings</h2>
                <ol className="relative border-s border-gray-200">
                    <li className="mb-10 ms-6">
                        <span
                            className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
                            <svg className="w-2.5 h-2.5 text-blue-800" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Advanced Federal Diploma of Higher Education in Computer Science
                            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">Present</span>
                        </h3>
                        <time
                            className="block mb-2 text-sm font-normal leading-none text-gray-400">
                            August 2023 - Present
                        </time>
                        <span
                            className="block mb-2 text-sm font-normal leading-none text-gray-400">
                            Centre professionnel du Nord vaudois (CPNV), CH-1450 Sainte-Croix VD
                        </span>
                        <p className="mb-4 text-base font-normal text-gray-500">
                            As an IT specialist with a focus on application development, I oversee software projects,
                            addressing client needs and creating secure solutions. My expertise spans web engineering,
                            software development, systems, and databases, utilizing tools such as HTML, CSS, PHP,
                            JavaScript, XML, UML, Kotlin/Java, Linux, SQL, and MySQL. In a continuous learning mode, I
                            thrive as a web or software developer, exploring opportunities within development companies,
                            agencies, or larger enterprises. My training includes practical modules and fundamental
                            knowledge, complemented by professional experience involving an internship and a diploma
                            project.
                        </p>
                    </li>
                    <li className="mb-10 ms-6">
                        <span
                            className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
                            <svg className="w-2.5 h-2.5 text-blue-800" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                            Federal Diploma of Vocational Education and Training
                        </h3>
                        <time
                            className="block mb-2 text-sm font-normal leading-none text-gray-400">
                            August 2019 - July 2023
                        </time>
                        <span
                            className="block mb-2 text-sm font-normal leading-none text-gray-400">
                            Centre professionnel du Nord vaudois (CPNV), CH-1450 Sainte-Croix VD
                        </span>
                        <p className="mb-4 text-base font-normal text-gray-500">
                            Over the course of 4 years, I acquired a fundamental knowledge of IT by following the <Link
                            href="https://www.modulbaukasten.ch/?d=Informaticien%2Fne-CFC-Informatique-d%27entreprise-(d%C3%A8s-2021)"
                            className="text-blue-600 visited:text-purple-600 underline underline-offset-2">ICT</Link> modules,
                            covering programming, databases, the web, systems, networks, security and project
                            management. This training included two internships. My first internship, lasting 7 months,
                            was at the Commune de Renens, where I held the position of IT trainee. My second internship,
                            lasting 5 months, was with DevFactory in Lausanne, where I had the opportunity to work as a
                            web developer intern. These experiences enabled me to put into practice the knowledge I had
                            acquired during my training and to develop concrete skills in the field of IT development.
                            Translated with DeepL.com (free version)
                        </p>
                    </li>
                </ol>

                <hr className="h-px my-8 bg-gray-200 border-0"/>

                <h2 className="text-4xl font-bold mb-4 mt-8">Professional experiences</h2>
                <ol className="relative border-s border-gray-200">
                    <li className="mb-10 ms-6">
                        <span
                            className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
                            <svg className="w-2.5 h-2.5 text-blue-800" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                            Computer trainee - Web development
                        </h3>
                        <time
                            className="block mb-2 text-sm font-normal leading-none text-gray-400">
                            February 2022 - August 2022 (7 month)
                        </time>
                        <span
                            className="block mb-2 text-sm font-normal leading-none text-gray-400">
                            DevFactory, CH-1011 Lausanne VD
                        </span>
                        <p className="mb-4 text-base font-normal text-gray-500">
                            During my internship at Devfactory, I had the opportunity to collaborate on websites in
                            production, in particular by adding functionalities using the PHP language associated
                            with the Laravel framework. I also had the opportunity to design a web application in
                            Javascript, using the Vue and Ionic frameworks. This application was built using
                            Capacitor, enabling it to be deployed on both the Play Store and the App Store.
                            <br/>
                            This experience enabled me to put my development skills into practice, while honing
                            my ability to manage my time effectively and organize my tasks. It also strengthened
                            my understanding of the requirements involved in producing high-performance web
                            solutions, and enriched my knowledge of mobile application development.
                        </p>
                    </li>
                    <li className="mb-10 ms-6">
                        <span
                            className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
                            <svg className="w-2.5 h-2.5 text-blue-800" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                            IT Trainee - IT Support
                        </h3>
                        <time
                            className="block mb-2 text-sm font-normal leading-none text-gray-400">
                            ASeptember 2022 - January 2023 (5 month)
                        </time>
                        <span
                            className="block mb-2 text-sm font-normal leading-none text-gray-400">
                            Municipality of Renens, CH-1020 Renens VD
                        </span>
                        <p className="mb-4 text-base font-normal text-gray-500">
                            During this internship, I held the role of Level 1 Helpdesk, providing user support,
                            machine preparation (user workstations), on-site interventions, product documentation,
                            and the installation of new headsets, including the testing, configuration and
                            documentation phases.
                            <br/>
                            In addition, I had the opportunity to set up a supervised homework management
                            system. This involved case analysis, the presentation of several solutions such as
                            form.app, jotform and [typeform.com](http://typeform.com/), and finally, the actual
                            implementation of the system. I also played an active role in setting up and
                            supervising the cantonal and communal voting/election system.
                            <br/>
                            This experience enabled me to develop my communication skills, and strengthen my
                            understanding of technological issues in a business context.
                        </p>
                    </li>
                </ol>

                <hr className="h-px my-8 bg-gray-200 border-0"/>


                <section>
                    <h2 className="text-4xl font-bold mb-4 mt-8">Computer Skills</h2>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                            <tbody>
                            <tr className="border-b">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex">
                                    Languages
                                </th>
                                <td className="px-6 py-4">
                                    c#
                                </td>
                                <td className="px-6 py-4">
                                    C
                                </td>
                                <td className="px-6 py-4">
                                    PHP
                                </td>
                                <td className="px-6 py-4">
                                    HTML
                                </td>
                                <td className="px-6 py-4">
                                    CSS
                                </td>
                                <td className="px-6 py-4">
                                    JavaScript
                                </td>
                                <td className="px-6 py-4">
                                    Python
                                </td>
                                <td className="px-6 py-4">
                                    Dart
                                </td>
                            </tr>
                            <tr className="border-b">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex">
                                    Framewoks
                                </th>
                                <td className="px-6 py-4">
                                    .Net
                                </td>
                                <td className="px-6 py-4">
                                    Laravel
                                </td>
                                <td className="px-6 py-4">
                                    Vue
                                </td>
                                <td className="px-6 py-4">
                                    Vite
                                </td>
                                <td className="px-6 py-4">
                                    Angular
                                </td>
                                <td className="px-6 py-4">
                                    Capacitor
                                </td>
                                <td className="px-6 py-4">
                                    Ionic
                                </td>
                                <td className="px-6 py-4">
                                    Flutter
                                </td>
                            </tr>
                            <tr className="border-b">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex">
                                    Databases
                                </th>
                                <td className="px-6 py-4">
                                    SQL
                                </td>
                                <td className="px-6 py-4">
                                    Mysql
                                </td>
                                <td className="px-6 py-4">
                                    Redis
                                </td>
                                <td className="px-6 py-4">
                                    MongoDB
                                </td>
                            </tr>
                            <tr className="border-b">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex">
                                    Methods
                                </th>
                                <td className="px-6 py-4">
                                    Waterfall
                                </td>
                                <td className="px-6 py-4">
                                    Agile
                                </td>
                                <td className="px-6 py-4">
                                    Scrum
                                </td>
                                <td className="px-6 py-4">
                                    TDD (Test Development Driven)
                                </td>
                            </tr>
                            <tr className="border-b">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex">
                                    Other
                                </th>
                                <td className="px-6 py-4">
                                    UML
                                </td>
                                <td className="px-6 py-4">
                                    Suite Office
                                </td>
                                <td className="px-6 py-4">
                                    Unity
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <hr className="h-px my-8 bg-gray-200 border-0"/>

                <section>
                    <h2 className="text-4xl font-bold mb-4 mt-8">Languages</h2>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                            <tbody>
                            <tr className="border-b">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex">
                                    French
                                </th>
                                <td className="px-6 py-4">
                                    Maternity language
                                </td>
                            </tr>
                            <tr className="border-b">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex">
                                    English
                                </th>
                                <td className="px-6 py-4">
                                    B2 self-evaluated
                                </td>
                            </tr>
                            <tr className="border-b">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex">
                                    German
                                </th>
                                <td className="px-6 py-4">
                                    A1 self-evaluated
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <hr className="h-px my-8 bg-gray-200 border-0"/>

                <section>
                    <h2 className="text-4xl font-bold mb-4 mt-8">Documents</h2>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                            <tbody>
                            <tr className="border-b">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex">
                                    <svg className="h-5 w-5 flex-shrink-0 text-gray-900 mr-2" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    JUILLET_Mikael_CV.pdf
                                </th>
                                <td className="px-6 py-4">
                                    <Link href="/documents/JUILLET_Mikael_CV.pdf"
                                       className="font-medium text-blue-600 hover:underline" target="_blank">Open</Link>
                                </td>
                            </tr>
                            <tr className="border-b">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex">
                                    <svg className="h-5 w-5 flex-shrink-0 text-gray-900 mr-2" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    JUILLET_Mikael_Certificate_CFC.pdf
                                </th>
                                <td className="px-6 py-4">
                                    <Link href="/documents/JUILLET_Mikael_Certificate_CFC.pdf"
                                       className="font-medium text-blue-600 hover:underline" target="_blank">Open</Link>
                                </td>
                            </tr>
                            <tr className="border-b">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex">
                                    <svg className="h-5 w-5 flex-shrink-0 text-gray-900 mr-2" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    JUILLET_Mikael_Recommendation_DevFactory.pdf
                                </th>
                                <td className="px-6 py-4">
                                    <Link href="/documents/JUILLET_Mikael_Recommendation_DevFactory.pdf"
                                       className="font-medium text-blue-600 hover:underline" target="_blank">Open</Link>
                                </td>
                            </tr>
                            <tr className="border-b">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex">
                                    <svg className="h-5 w-5 flex-shrink-0 text-gray-900 mr-2" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    JUILLET_Mikael_Recommendation_Renens.pdf
                                </th>
                                <td className="px-6 py-4">
                                    <Link href="/documents/JUILLET_Mikael_Recommendation_Renens.pdf"
                                       className="font-medium text-blue-600 hover:underline" target="_blank">Open</Link>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </section>
        </div>
);
}
