import { ReactNode } from "react";

interface IProps {
  className?: string;
  id?: string;
  isCentered?: boolean;
  children: ReactNode;
}

const Flex = (props: IProps) => {
  return (
    <div
      id={props.id}
      className={`flex ${props.className} ${
        props.isCentered ? "justify-center items-center" : ""
      } `}
    >
      {props.children}
    </div>
  );
};
export default Flex;
