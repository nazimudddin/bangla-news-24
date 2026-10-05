import React from "react";
import navlogo from "../../public/logo.webp";
import Image from "next/image";
import Navlinks from "./Navlinks";
import HeaderBtn from "./HeaderBtn";

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <header className="w-full max-w-7xl mx-auto px-4 py-4 relative">

            {/* Center */}
            <div className="flex items-center justify-center gap-3">
                <Image
                    width={50}
                    height={50}
                    alt="navbar logo"
                    src={navlogo}
                />

                <div>
                    <h2 className="text-xl font-bold">
                        Bangla News 24
                    </h2>

                    <p>{date}</p>
                </div>
            </div>

            {/* Right */}
            <HeaderBtn></HeaderBtn>
            <Navlinks></Navlinks>

        </header>
    );
};

export default Header;