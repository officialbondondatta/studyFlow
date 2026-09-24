import { useState } from "react";
import { LuNotebookPen } from "react-icons/lu";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router";

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false)
    const navLinks =
        <>
            <li className="hover:text-black "><a href="/">Features</a></li>
            <li className="hover:text-black "><a href="/">How it works</a></li>
            <li className="hover:text-black "><a href="/">Pricing</a></li>
            <li className="hover:text-black "><a href="/">FAQ</a></li>

        </>
    const handleDropDown = () => {
        setIsClicked(!isClicked)
    }
    return (
        <nav className="navbar py-5 sticky top-0 z-50 bg-[#f1f2ec] after:absolute after:inset-0 after:z-30 after:shadow-md after:pointer-events-none after:content-['']">
            <div className="container mx-auto flex">
                <div className="navbar-start px-4 xl:px-0">
                    <a className="flex gap-2 items-center justify-center cursor-pointer text-lg font-bold"><LuNotebookPen className="text-white bg-[#0e7c66] p-2 w-9 h-9 rounded-md" /> StudyFlow</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal gap-6 px-1 md:px-2 text-[#6f7a73]">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="lg:hidden md:hidden flex items-center">
                        <button type="button" onClick={handleDropDown} className=" lg:hidden">
                            {isClicked ? <RxCross2 className="text-xl font-bold" /> : <RxHamburgerMenu
                                className="text-xl" />}
                        </button>
                        {isClicked && <>
                            <ul
                                className="menu m-0 z-20 font-semibold absolute left-0 top-full p-3 w-full bg-[#f1f2ec]">
                                {navLinks}
                                <li>
                                    <Link to="/signin">
                                        <button className="lg:hidden cursor-pointer">Login</button>
                                    </Link>
                                </li>
                                <li><button className="btn bg-[#0e7c66] text-white rounded-xl lg:hidden">Get Started</button></li>
                            </ul>

                        </>
                        }
                    </div>
                    <div className="flex gap-5 px-3 items-center">
                        <Link to="/signin">
                            <button className="hidden border border-slate-500 px-6 py-1 rounded-md lg:block md:block cursor-pointer">Login</button>
                        </Link>
                        <button className="btn hidden md:block bg-[#0e7c66] text-white rounded-xl lg:block">Get Started</button>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;