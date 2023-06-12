import { ReactNode } from "react";

interface IProps {
  className?: string;
  isCentered?: boolean;
  children: ReactNode;
}

const Flex = (props: IProps) => {
  return (
    <div
      className={`flex ${props.className} ${
        props.isCentered ? "justify-center items-center" : ""
      } `}
    >
      {props.children}
    </div>
  );
};
export default Flex;
