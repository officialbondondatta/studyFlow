import { FaRegCopyright } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";

const Footer = () => {
    const date = new Date()
    return (
        <footer className="bg-white mt-20 py-20 border border-slate-200 border-l-0 border-r-0">
            <div className="container mx-auto flex items-center justify-center">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-5  gap-5 items-center justify-between">
                    <div className="flex flex-col gap-5 justify-self-start">
                        <div className="justify-self-start flex px-4 xl:px-0">
                            <a className="flex gap-2 items-center justify-center cursor-pointer text-lg font-bold"><LuNotebookPen className="text-white bg-[#0e7c66] p-2 w-9 h-9 rounded-md" /> StudyFlow</a>
                        </div>
                        <p className="max-w-70">A study dashboard for turning goals into daily progress.</p>
                    </div>
                    <div className="justify-self-center-safe">
                        <ul>
                            <li className="text-lg font-semibold mb-5">Product</li>
                            <li className="text-lg text-slate-500">Features</li>
                            <li className="text-lg text-slate-500">Pricing</li>
                            <li className="text-lg text-slate-500">FAQ</li>
                        </ul>
                    </div>

                    <div className="justify-self-center-safe">
                        <ul>
                            <li className="text-lg font-semibold mb-5">Company</li>
                            <li className="text-lg text-slate-500">About</li>
                            <li className="text-lg text-slate-500">Blog</li>
                            <li className="text-lg text-slate-500">Careers</li>
                        </ul>
                    </div>
                    <div className="justify-self-center-safe">
                        <ul>
                            <li className="text-lg font-semibold mb-5">Resources</li>
                            <li className="text-lg text-slate-500">Help center</li>
                            <li className="text-lg text-slate-500">Study tips</li>
                            <li className="text-lg text-slate-500">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container mx-auto text-slate-300 mt-10">
                <hr />
                <div>
                    <h2 className="text-sm text-slate-500 mt-3 flex items-center gap-2"><FaRegCopyright />{date.getFullYear()} StudyFlow. Built with love towards life by Bondon Datta</h2>
                </div>
            </div>
        </footer >
    );
};

export default Footer;