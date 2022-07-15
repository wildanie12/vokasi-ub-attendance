import React from "react";

const HistoryCard = ({ className = "" }) => {
    return (
        <div
            className={`bg-primary-600 text-white font-poppins rounded-lg shadow-xl select-none transition-all duration-100 ease-out hover:scale-[102%] hover:shadow-2xl ${className}`}
        >
            <div className="flex justify-between p-3 w-full items-center border-b border-gray-400">
                <h4 className="text-white font-bold pl-2 pr-4 justify-between">
                    Senin
                </h4>
                <div className="flex space-x-2 uppercase tracking-widest text-gray-200 text-xs font-semibold">
                    <div>Shift Siang</div>
                    <div>28 Juni 2022</div>
                </div>
            </div>
            <div className="w-full flex justify-center divide-x divide-gray-200">
                <div className="p-4 flex justify-center items-center flex-col flex-grow">
                    <div className="uppercase tracking-widest text-gray-200 text-xs font-semibold">
                        Check-In
                    </div>
                    <div className="text-4xl font-bold text-white">08.01</div>
                </div>
                <div className="p-4 flex justify-center items-center flex-col flex-grow">
                    <div className="uppercase tracking-widest text-gray-200 text-xs font-semibold">
                        Check-In
                    </div>
                    <div className="text-4xl font-bold text-white">08.01</div>
                </div>
            </div>
        </div>
    );
};

export default HistoryCard;
