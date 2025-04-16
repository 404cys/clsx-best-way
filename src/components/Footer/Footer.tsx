import Link from "next/link";
import { BsInstagram } from "react-icons/bs";


export default function FooterBlock() { 
    return( 
        <footer>
            <div className="w-full h-[80px] bg-black border-t-2 border-t-blue-950 mask-b-from-0.5 border-white flex justify-evenly items-center-safe ">
                <div className="ml-2">
                    Abdulrahman | @404cys 
                </div>
                <div className="flex items-center gap-1">
                    <Link href={"https://www.instagram.com/404cys?igsh=MXJnc3lnODBnb3dkMQ=="}>Instagram  </Link>
                    <BsInstagram />
                </div>
            </div>
        </footer>
    )
}