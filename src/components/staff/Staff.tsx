import headTeacher from "../../../public/faithbaptist/headteacher.jpg";
import staff1 from "../../../public/faithbaptist/faith2.jpg";
import staff2 from "../../../public/faithbaptist/faith4.jpg";
import Image from "next/image";

const ourStaff = [
  {
    name: "Mr. Brother Joshua",
    picture: staff1,
    portfolio: "Board Chairman",
  },
  {
    name: "Rev. Dr. Nkem E. Osuigwe",
    picture: staff2,
    portfolio: "Proprietor",
  },
  {
    name: "Mrs. Charity E. Osuigwe",
    picture: headTeacher,
    portfolio: "Headteacher",
  },
];

const Staff = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      {ourStaff.map((staff, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="border-primary border-2 w-[20rem] h-[20rem] rounded-full overflow-hidden">
            <Image src={staff.picture} alt={staff.name} className="object-center size-fit" />
          </div>
          <h3 className="mt-4 font-semibold">{staff.name}</h3>
          <p className="text-gray-600">{staff.portfolio}</p>
        </div>
      ))}
    </div>
  );
};

export default Staff;
