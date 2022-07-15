import React from "react";
import AttendanceForm from "../../Components/Organisms/Karyawan/AttendanceForm";
import DateTimeMain from "../../Components/Organisms/Karyawan/DateTimeMain";
import ProfileHeader from "../../Components/Organisms/Karyawan/ProfileHeader";
import Timeline from "../../Components/Organisms/Karyawan/Timeline";

import AssetBlock1 from "../../Assets/block_1";
import AssetBlock2 from "../../Assets/block_2";
import HistoryCard from "../../Components/Organisms/Karyawan/HistoryCard";

const Index = () => {
    return (
        <div className="min-h-screen py-16 relative w-screen overflow-hidden flex items-center pb-24">
            <div className="absolute top-0 -z-10">
                <AssetBlock1 />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10">
                <AssetBlock2 />
            </div>
            <div className="fixed top-0 -z-20 opacity-5 left-0 right-0">
                <img src="/images/plexus_background.png" className="w-full" />
            </div>
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
                <div className="container flex justify-center">
                    <AttendanceForm className="py-16" />
                </div>
                <div className="container justify-center w-full grid grid-cols-3 gap-4">
                    <HistoryCard />
                    <HistoryCard />
                    <HistoryCard />
                </div>
            </div>
        </div>
    );
};

export default Index;
