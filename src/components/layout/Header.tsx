// `app/page.tsx` is the UI for the `/` URL
import Image from "next/image";
import logo from "./logo.png"
import Link from "next/link";

export default function Header() {
    return(
        <header className="App-header w-full top-0">
            <div className="App-header__content w-full">
                <ul className="flex flex-wrap w-full">
                    <div className="App-header__logo px-8">
                        <Link href={"./"}>
                            <Image src={logo} alt={"logo"} width={110} height={110} className="rounded-full"></Image>
                        </Link>
                    </div>
                    <div className="flex-grow"></div>
                    <nav className="flex px-2">
                        <ul className="flex px-8">
                            <li className="flex flex-col px-1 rounded-full ml-5 justify-center hover:shadow scale-95"><a href="/experience">Experience</a></li>
                            <li className="flex flex-col px-4 rounded-full ml-5 justify-center hover:shadow scale-95"><a href="/projects">Projects</a></li>
                            <li className="flex flex-col px-6 rounded-full ml-5 justify-center hover:shadow scale-95"><a href="/about">About</a></li>
                        </ul>
                    </nav>
                </ul>
            </div>
        </header>
    )
}