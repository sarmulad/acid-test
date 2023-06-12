import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

function Container({ children, className }: ContainerProps) {
  return (
    <div className={`lg:w-[80%] xl:w-[70%] mx-auto ${className} px-5 lg:px-0`}>
      {children}
    </div>
  );
}

export default Container;
