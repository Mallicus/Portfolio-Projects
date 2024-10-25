import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import profilBillede from "../../components/about/images/profilbillede.jpg"

export default function Projects() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen
     pt-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
            <Header></Header>
            <main className="w-full pt-0 top-0">
                <div className="flex">
                    <div className="w-2/5 hidden md:block">
                        <Image src={profilBillede} alt={"Profile picture"}></Image>
                    </div>
                    <div className="w-3/5 flex-grow">
                        <h2 className="text-center font-bold text-lg opacity-70 pb-8">
                            About Me
                        </h2>
                        <p className="flex-grow">
                            Input text here
                        </p>
                    </div>
                </div>
                <div>
                    <nav className="text-center pt-10">
                        <button className="h-12 rounded-lg w-32 bg-blue-500 border-2 border-black hover:bg-blue-600">
                            <Link href="" className="p-1">Resumé</Link>
                        </button>
                        <button className="h-12 ml-1.5 rounded-lg w-32 bg-blue-500 border-2 border-black hover:bg-blue-600">
                            <Link href="" className="p-1">CV</Link>
                        </button>
                    </nav>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}