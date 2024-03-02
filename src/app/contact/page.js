import Image from "next/image";
import Link from 'next/link';
import Mail from '/public/Gmail_Logo_256px.png';
import Github from '/public/github-mark.png';
import Linkedin from '/public/LI-In-Bug.png';

export default function Page() {
    return (

        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Let&#39;s connect</h1>

                    <div className="mx-auto max-w-7xl px-6 lg:px-8 align-middle">
                        <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none">
                            <Link href="mailto:juillet.mikael@gmail.com"><Image class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src={Mail} alt="Gmail" width="158" height="48"/></Link>
                            <Link href="https://www.linkedin.com/in/mikael-juillet/"><Image class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src={Linkedin} alt="Linkedin" width="158" height="48"/></Link>
                            <Link href="https://github.com/JuilletMikael"><Image class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src={Github} alt="GitHub" width="158" height="48"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
