import React from "react";
import DateTimeMain from "../../Components/Organisms/Karyawan/DateTimeMain";
import ProfileHeader from "../../Components/Organisms/Karyawan/ProfileHeader";

const Index = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center">
            <div className="container">
                <div className="w-full flex divide-x items-center divide-gray-400">
                    <DateTimeMain className="w-1/2 pr-12" />
                    <ProfileHeader className="w-1/2 pl-12" />
                </div>
            </div>
        </div>
    );
};

export default Index;
