import clsx from "clsx";

interface TitlePropTypes {
  smallHeader: string;
  bigHeader: string;
  variant: "dark" | "light";
}

const Titles = ({ smallHeader, bigHeader, variant }: TitlePropTypes) => {
  return (
    <div className="grid grid-cols-1 gap-2 place-items-center text-center">
      <h1 className={clsx("text-lg font-semibold text-opacity-60", variant === "dark" ? "text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-800" : "text-white")}>
        {smallHeader}
      </h1>
      <h1 className={clsx("text-xl md:text-3xl lg:text-4xl capitalize font-semibold", variant === "dark" ? "text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-500" : "text-white")}>
        {bigHeader}
      </h1>
    </div>
  );
};

export default Titles;
