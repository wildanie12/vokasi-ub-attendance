import React from "react";
import TimelineIndicator from "./TimelineIndicator";
import TimelineProgress from "./TimelineProgressBar";

const Timeline = ({ className = "" }) => {
    return (
        <div
            className={`${className} w-full h-8 bg-gray-200 relative grid-cols-12 grid shadow-inner`}
        >
            <TimelineIndicator className="col-span-1" text="2AM" />
            <TimelineIndicator className="col-span-1" text="4AM" />
            <TimelineIndicator className="col-span-1" text="6AM" />
            <TimelineIndicator className="col-span-1" text="8AM" />
            <TimelineIndicator className="col-span-1" text="10AM" />
            <TimelineIndicator className="col-span-1" text="12PM" />
            <TimelineIndicator className="col-span-1" text="2PM" />
            <TimelineIndicator className="col-span-1" text="4PM" />
            <TimelineIndicator className="col-span-1" text="6PM" />
            <TimelineIndicator className="col-span-1" text="8PM" />
            <TimelineIndicator className="col-span-1" text="10PM" />
            <TimelineIndicator className="col-span-1" text="12AM" />
            <TimelineProgress className="w-[50%]" />
        </div>
    );
};

export default Timeline;
