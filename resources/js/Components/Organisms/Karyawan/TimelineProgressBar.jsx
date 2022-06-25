import React from "react";

const TimelineProgress = ({ className }) => {
    return (
        <div className="absolute w-full h-3/4 flex top-1/2 -translate-y-1/2 ">
            <div className="w-[8.33%]"></div>
            <div
                className={`${className} flex flex-grow font-poppins items-center justify-between rounded-md bg-gradient-to-bl from-primary-400 to-indigo-500`}
            >
                <div className="text-xs font-bold text-white pl-2">
                    In: 08.17
                </div>
                <div className="text-xs font-bold text-white pr-2">
                    Out: 08.17
                </div>
            </div>
            <div className="w-[8.33%]"></div>
        </div>
    );
};

export default TimelineProgress;
