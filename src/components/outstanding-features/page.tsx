import { RiComputerFill } from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";
import { IoLibrary } from "react-icons/io5";
import { FaChurch } from "react-icons/fa";
import Card from "../card/Card";
import AnimatedContainer from "../utils/AnimatedContainer";


const OutstandingFeatures = () => {
const whatWeOffer = [
        {
            header: "Our Mission",
            description: "The mission of our Faith Baptist pupils is to provide a nurturing and empowering educational environment that fosters the holistic development of young leaders and to inculcate the fear of God early in the hearts of the children",
            icon: <FaChurch size={32} />
    },
        {
            header: "Our Vision",
            description: "To build God-fearing leaders of tomorrow",
            icon: <RiComputerFill size={32} />
    },
        {
            header: "Our Motto",
            description: "Fear of God and Wisdom",
            icon: <GiTeacher size={32} />
    },
       
    ]


  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {whatWeOffer.map((item, index)=>(
             <AnimatedContainer key={index} className='bg-white border cursor-pointer hover:shadow-md transition-all ease-in-out duration-150 group flex flex-col gap-2 rounded-md p-5 shadow-sm'>
             <span className='bg-blue-950 self-center group-hover:bg-black transition-all ease-linear duration-150 text-white rounded-full h-16 w-16 grid place-items-center'>{item.icon}</span>
             <h4 className='self-center font-semibold text-lg text-black p-2'>{item.header}</h4>
             <p className='text-sm text-amber-800 self-center'>{item.description}</p>
         </AnimatedContainer>
            ))}
            </section>


  )
}

export default OutstandingFeatures