import { RiComputerFill } from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";
import { IoLibrary } from "react-icons/io5";
import { FaChurch } from "react-icons/fa";
import Card from "../card/Card";


const WhyChooseUs = () => {
const whatWeOffer = [
        {
            header: "Christian School",
            description: "We believe that a strong and united Christian home plays a vital role in fostering the growth and development of our pupils.",
            icon: <FaChurch size={32} />
    },
        {
            header: "Equipped ICT laboratory",
            description: "Our ICT laboratory is designed to offer a hands-on experiential approach to modern education, allowing our pupils to apply theoretical concept and develop practical skills, believing that technology is bed rock of 21 century",
            icon: <RiComputerFill size={32} />
    },
        {
            header: "Quality Teachers",
            description: "Our teachers are carefully selected based on their expertise, educational background, commitment to our school’s mission and value",
            icon: <GiTeacher size={32} />
    },
        {
            header: "Library/Academic Excellence",
            description: "Reading culture is not common, we are dedicated to provide a high quality education that promotes intellectual growth, critical thinking and thirst for knowledge",
            icon: <IoLibrary size={32} />
    },
    ]


  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {whatWeOffer.map((item, index)=>(
              <Card key={index} icon={item.icon}  title={item.header} description={item.description} />
            ))}
            </section>


  )
}

export default WhyChooseUs