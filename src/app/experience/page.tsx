import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import zbc from "@/components/experience/images/zbc.jpg"
import celf from "@/components/experience/images/celf.jpg"

export default function ExperiencePage() {
    return (

        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen
     pt-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
            <Header></Header>
            <main className="w-full p-10 pt-0 top-0">
                <ul>
                    <li>
                        <div className="flex p-1">
                            <div className="w-1/2 hidden md:block pr-4 relative h-[460px] mx-12 group">
                                <Image src={zbc} alt={"Picture of ZBC" } style={{ width: '100%', height: '100%', objectFit: 'scale-down', objectPosition: 'top' }}></Image>
                            </div>
                            <div className="w-1/2 float-right flex flex-col flex-grow">
                                <div className="text-center">
                                    <p className="opacity-70">1. August 2024 -</p>
                                </div>
                                <div className="pb-2 flex flex-col">
                                    <h2 className="font-semibold pb-2">
                                        School Education
                                    </h2>
                                    <p className="">
                                        School education at ZBC, here im learning C#, Html/css, JavaScript, React, Next.js framework, Database language like Mysql and Appwrite,
                                        general server technology. Cisco is also apart of this, so im also learning how to set up a router and switch setup
                                        At the school its all about self-learning so i started out with learning Next.js after being acquainted with it at H1
                                    </p>
                                    <ul className="flex flex-wrap">
                                        <li className="mr-1.5 mt-1.5">
                                            <div
                                                className="flex items-center rounded-full bg-teal-500/50 px-3
                                         py-1 text-xs font-medium leading-5 text-black ">C#
                                            </div>
                                        </li>
                                        <li className="mr-1.5 mt-1.5">
                                            <div
                                                className="flex items-center rounded-full bg-teal-500/50 px-3
                                         py-1 text-xs font-medium leading-5 text-black ">Html/css
                                            </div>
                                        </li>
                                        <li className="mr-1.5 mt-1.5">
                                            <div
                                                className="flex items-center rounded-full bg-teal-500/50 px-3
                                         py-1 text-xs font-medium leading-5 text-black ">JavaScript
                                            </div>
                                        </li>
                                        <li className="mr-1.5 mt-1.5">
                                            <div
                                                className="flex items-center rounded-full bg-teal-500/50 px-3
                                         py-1 text-xs font-medium leading-5 text-black ">React
                                            </div>
                                        </li>
                                        <li className="mr-1.5 mt-1.5">
                                            <div
                                                className="flex items-center rounded-full bg-teal-500/50 px-3
                                         py-1 text-xs font-medium leading-5 text-black ">Next.js
                                            </div>
                                        </li>
                                        <li className="mr-1.5 mt-1.5">
                                            <div
                                                className="flex items-center rounded-full bg-teal-500/50 px-3
                                         py-1 text-xs font-medium leading-5 text-black ">MySql
                                            </div>
                                        </li>
                                        <li className="mr-1.5 mt-1.5">
                                            <div
                                                className="flex items-center rounded-full bg-teal-500/50 px-3
                                         py-1 text-xs font-medium leading-5 text-black ">Appwrite
                                            </div>
                                        </li>
                                        <li className="mr-1.5 mt-1.5">
                                            <div
                                                className="flex items-center rounded-full bg-teal-500/50 px-3
                                         py-1 text-xs font-medium leading-5 text-black ">Cisco
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex p-1">
                            <div className="w-1/2 hidden md:block pr-4 relative h-[460px] mx-12 group">
                                <Image src={celf} alt={"Image of Celf"} style={{ width: '100%', height: '100%', objectFit: 'scale-down', objectPosition: 'top' }}></Image>
                            </div>
                            <div className="w-1/2 float-right flex flex-col flex-grow">
                                <div className="text-center">
                                    <p className="opacity-70">18. January 2024 - 28 June 2024</p>
                                </div>
                                <div className="pb-2 flex flex-col">
                                    <h2 className="font-semibold pb-2">
                                        Student
                                    </h2>
                                    <p className="">
                                        Student at Celf where i learned to code in C#
                                        and basic router and switch configuration
                                    </p>
                                    <ul className="flex">
                                        <li className="mr-1.5 mt-1.5">
                                            <div
                                                className="flex items-center rounded-full bg-teal-500/50 px-3
                                         py-1 text-xs font-medium leading-5 text-black ">C#
                                            </div>
                                        </li>
                                        <li className="mr-1.5 mt-1.5">
                                            <div
                                                className="flex items-center rounded-full bg-teal-500/50 px-3
                                         py-1 text-xs font-medium leading-5 text-black ">Cisco
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </main>
            <Footer></Footer>
        </div>
    );
}