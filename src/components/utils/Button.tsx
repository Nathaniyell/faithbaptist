import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import clsx from "clsx";

type BtnProps ={
  href: string,
  btnText: string
  className?: string,

}

const Button = ({href, btnText, className}:BtnProps) => {
  return (
    <Link
          
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