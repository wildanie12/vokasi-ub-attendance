import React from "react";
import DateTimeMain from "../../Components/Organisms/Karyawan/DateTimeMain";
import ProfileHeader from "../../Components/Organisms/Karyawan/ProfileHeader";
import Timeline from "../../Components/Organisms/Karyawan/Timeline";

const Index = () => {
    return (
        <div className="h-screen w-full flex items-center">
            <div className="w-full flex flex-col items-center justify-center">
                <div className="container">
                    <div className="w-full flex divide-x items-center divide-gray-400">
                        <DateTimeMain className="w-1/2 pr-12" />
                        <ProfileHeader className="w-1/2 pl-12" />
                    </div>
                    <h4 className="font-poppins text-center text-4xl font-light py-16 text-primary-500">
                        Selamat Sore !
                    </h4>
                </div>
                <Timeline />
            </div>
        </div>
    );
};

export default Index;
