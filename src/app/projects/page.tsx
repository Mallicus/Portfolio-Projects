import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Project1 from "@/components/projects/Project1";
import Project2 from "@/components/projects/Project2";

export default function ProjectPage() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen
     pt-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
            <Header></Header>
            <main className="w-full p-10 pt-0">
                <ul>
                    <li>
                        <div className="flex p-1">
                            <div className="w-1/2 float-right flex flex-col flex-grow">
                                <div className="text-center">
                                    <p className="opacity-70">1. August 2024 -</p>
                                </div>
                                <div className="pb-2 flex flex-col">
                                    <h2 className="font-semibold">
                                        Project
                                    </h2>
                                    <p className="">
                                        Project description
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
                            <div className="w-1/2 hidden md:block">Pictures
                                <Project1></Project1>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex p-1">
                            <div className="w-1/2 float-right flex flex-col flex-grow">
                                <div className="text-center">
                                    <p className="opacity-70">18. January 2024 - 28 June 2024</p>
                                </div>
                                <div className="pb-2 flex flex-col">
                                    <h2 className="font-semibold">
                                        Project
                                    </h2>
                                    <p className="">
                                        Project description
                                    </p>
                                    <ul className="flex">
                                        <li className="mr-1.5 mt-1.5">
                                            <div
                                                className="flex items-center rounded-full bg-teal-500/50 px-3
                                         py-1 text-xs font-medium leading-5 text-black ">JavaScript
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
                            <div className="w-1/2 hidden md:block">Pictures
                                <Project2></Project2>
                            </div>
                        </div>
                    </li>
                </ul>
            </main>
            <Footer></Footer>
        </div>
    );
}