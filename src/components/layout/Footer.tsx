import Link from "next/link";
import { Mail, Github, Facebook } from 'lucide-react'

// `app/page.tsx` is the UI for the `/` URL
export default function Footer() {
    return(
        <footer className="footer w-full">
            <div className="">
                <h2 className="opacity-70 pt-8 text-center justify-center pb-2 w-full">Links
                    <div className="row justify-center flex w-full space-x-10">
                        <Link href="mailto:Marc.routhe@live.dk" className="hover:text-blue-400">
                            <Mail className="h-6 w-6"/>
                        </Link>
                        <Link href="mailto:Marc.routhe@live.dk" className="hover:text-blue-400">
                            <Github className="h-6 w-6"/>
                        </Link>
                        <Link href="mailto:Marc.routhe@live.dk" className="hover:text-blue-400">
                            <Facebook className="h-6 w-6"/>
                        </Link>
                    </div>
                </h2>
            </div>
            <h2 className="text-center opacity-70 mt-2">© Copyright 2024. All Rights Reserved. Designed by Marc Routhe</h2>
        </footer>
    )
}