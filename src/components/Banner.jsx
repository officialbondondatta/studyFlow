import { FaArrowRight, FaRegCheckCircle } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="mt-20 flex items-center justify-center flex-col space-y-5">
            <span className="bg-[#ffffff] px-3 py-2 rounded-full border text-sm border-[#ddded3] text-slate-500 ">Built for students who like to see progress</span>
            <h2 className="max-w-190 text-5xl text-center font-bold">Turn big goals into daily tasks you'll actually finish
            </h2>
            <p className="text-slate-500  max-w-135 text-center">Set a goal, break it into tasks, and watch a progress bar move every time you check one off. No spreadsheets, no guessing what to study next.
            </p>

            <div className="flex gap-5">
                <button className="btn text-white py-7 px-8 bg-[#0e7c66] rounded-xl">Start for free <FaArrowRight className="text-white ml-2" />
                </button>
                <button className="btn py-7 px-8 rounded-xl bg-white">See how it works</button>
            </div>

            <div className="card bg-base-100 mt-4 rounded-xl border border-slate-300">
                <div className="card-body space-y-2">
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-slate-500">Today's Progress</h2>
                            <span className="text-slate-700 font-bold text-lg">72%</span>
                        </div>
                        <progress className="progress  text-[#0e7c66]" value="70" max="100"></progress>
                    </div>
                    <div className="py-3 px-2 border border-slate-300 rounded-xl line-through text-slate-500">
                        <p className="flex w-96 items-center gap-2"><FaRegCheckCircle className="text-[#0e7c66]" />Solve 10 integration problems</p>
                    </div>
                    <div className="py-3 px-2 border border-slate-300 rounded-xl line-through text-slate-500">
                        <p className="flex w-96 items-center gap-2"><FaRegCheckCircle className="text-[#0e7c66]" />Read Chapter 4: Cell Structures</p>
                    </div>
                    <div className="py-3 px-2 border border-slate-300 rounded-xl line-through text-slate-500">
                        <p className="flex w-96 items-center gap-2"><FaRegCheckCircle className="text-slate-300" />Write essay outline</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;