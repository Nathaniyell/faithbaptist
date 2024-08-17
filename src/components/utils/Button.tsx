import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import clsx from "clsx";

type BtnProps ={
  href: string,
  btnText: string
  className?: string,
  [key: string]: any; // Allows any additional props

}

const Button = ({href, btnText, className, ...props}:BtnProps) => {
  return (
    <Link
    {...props}
            href={href}
                        className={clsx(`bg-white shadow w-fit h-fit rounded p-3 hover:shadow-md`, className)}
            // style={{display: "block"}}
          >
            <span>{btnText}</span>
            {/* <BsArrowUpRight className="self-start" /> */}
          </Link>
  
  )
}

export default Button

type RetroButtonProp={
onClick: ()=>void
children: React.ReactNode
textColor: string
bgColor: string
}
export const RetroButton: React.FC<RetroButtonProp> = ({ children, onClick, textColor,bgColor }) => {
  return (
    <button
      onClick={onClick}
      className={`relative group inline-block min-w-[130px] h-[40px] font-semibold text-${textColor} bg-transparent border border-${textColor} outline-none transition-all duration-300 ease-in-out z-0 hover:after:top-0 hover:after:left-0`}
    >
      {children}
      <span className={`absolute inset-0 bg-${bgColor} z-[-1] transition-all duration-200 ease-in-out top-[5px] left-[5px]`} />
    </button>
  );
};


type SlidingButtonProps = RetroButtonProp & {
  borderRadius?: string; 
  fontSize?: string; 
  disabled?: boolean;
  className?: string
};

export const SlidingLeftButton: React.FC<SlidingButtonProps> = ({ children, onClick, textColor, className }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(`relative group inline-block min-w-[130px] h-[40px] font-semibold text-${textColor} bg-white border-2 rounded-md overflow-hidden transition-all duration-300 ease-in-out z-0 hover:text-white`, className)}
    >
      {children}
      <span className={`absolute inset-0 w-0 h-full bg-${textColor} -z-[1] transition-all duration-300 ease-in-out left-0 top-0 group-hover:w-full`} />
    </button>
  );
};





