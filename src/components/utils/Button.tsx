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


type SlidingButtonProps = {
    [key: string]: any;
    className?: string
  slideDirection: "right" | "left"
  onClick?: ()=>void
children: React.ReactNode
textColor: string
};

export const SlidingButton: React.FC<SlidingButtonProps> = ({ children, onClick, textColor, className, slideDirection, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(`relative group inline-block min-w-[130px] h-[40px] font-semibold text-${textColor} bg-white border-2 rounded-md overflow-hidden transition-all duration-300 ease-in-out z-0 hover:text-white`, className)}
      {...props}
    >
      {children}
      <span className={`absolute inset-y-0 w-0 h-full bg-${textColor} -z-[1] transition-all duration-300 ease-in-out ${slideDirection}-0 top-0 group-hover:w-full`} />
      {/*
      for top-bottom
      <span className={`absolute inset-x-0 top-0 h-0 w-full bg-${textColor} transition-all duration-300 ease-in-out z-[-1] hover:h-full`} />
      
      */}
    </button>
  );
};








