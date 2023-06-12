import { ReactNode } from "react";

interface IProps {
  className?: string;
  children: ReactNode;
}

const Heading = (props: IProps) => {
  return (
    <h1
      className={`hogira uppercase font-semibold text-2xl lg:text-4xl bg-gradient-to-r from-[#32F7AA] via-[#1D47FF] to-[#FFFFFF] bg-clip-text text-transparent  ${props.className}`}
    >
      {props.children}
    </h1>
  );
};
export default Heading;
