import React from "react";

const TimelineIndicator = ({ className = "", text = "2AM" }) => {
    return (
        <div className={`${className} relative flex justify-end`}>
            <div
                className={`absolute top-0 -translate-y-full border-r-2 border-gray-200 h-3 pr-2`}
            >
                <span className="text-gray-200 font-semibold relative -top-3">
                    {text}
                </span>
            </div>
        </div>
    );
};

export default TimelineIndicator;
