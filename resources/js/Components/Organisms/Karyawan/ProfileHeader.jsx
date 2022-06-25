import React from "react";

const ProfileHeader = ({ className = "" }) => {
    return (
        <div className={`flex ${className}`}>
            <img
                className="rounded-full"
                src="https://images.unsplash.com/photo-1534234757579-8ad69d218ad4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=120&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29mZmVlfHx8fHx8MTY1NjEzNjU3OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=120"
            />
            <div className="w-full flex flex-col ml-4 font-poppins justify-center">
                <h4 className="text-2xl font-bold text-gray-600">
                    Annisa Chyntya
                </h4>
                <div className="uppercase tracking-widest font-xl text-gray-400 font-bold">
                    Gardener
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;
