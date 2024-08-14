import startup1 from "../../../public/prod-images/cases/Calm.png";
import startup2 from "../../../public/prod-images/cases/GREENHOUSE.png";
import startup3 from "../../../public/prod-images/cases/advancedmecsystems.jpg";
import startup4 from "../../../public/prod-images/cases/audiostack.jpg";
import startup5 from "../../../public/prod-images/cases/golde.png";
import startup6 from "../../../public/prod-images/cases/kindroom.png";
import startup7 from "../../../public/prod-images/cases/saie.png";
import startup8 from "../../../public/prod-images/cases/seamm.png";
import startup9 from "../../../public/prod-images/cases/seep.png";
import startup10 from "../../../public/prod-images/cases/trashbots.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Space from "../Space";
import Marquee from "../magicui/marque";
import Titles from "../titles/Titles";

const StartUp = () => {
    const Cases = [

        { title: "Greenhouse", },
        { title: "Audiostack", },
        { title: "Kindroom", },
        { title: "Calm", },
        { title: "Seep", },
        { title: "Saie", },
        { title: "Seamm", },
        { title: "Advancedmecsystems", },
        { title: "Golde", },
        { title: "Trashbots", },
    ];

    const isLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
    const isDesktop = useMediaQuery({ query: "(min-width: 1600px)" });

    return (
        <div className="p-10 text-primary md:w-10/12 mx-auto">
            <Titles bigHeader="Our recent cases" smallHeader="latest case" variant="light"  />
            <Space />
            <Marquee pauseOnHover className="[--duration:20s]">
                {Cases.slice(0, 5).map((caseItem) => (
                    <div key={caseItem.title} className="bg-white p-6 h-full flex items-center justify-center palce-items-center rounded-md opacity-85 hover:opacity-100 transition-all ease-linear duration-200 cursor-pointer">
                       <h4>{caseItem.title}</h4>
                    </div>
                ))}
            </Marquee>
            <Space />
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {Cases.slice(5, -1).map((caseItem) => (
                    <div key={caseItem.title} className="bg-white p-6 h-full flex items-center justify-center palce-items-center rounded-md opacity-85 hover:opacity-100 transition-all ease-linear duration-200 cursor-pointer">
                     <h4>{caseItem.title}</h4>
                    </div>
                ))}
            </Marquee>

        </div>
    );
};

export default StartUp;
