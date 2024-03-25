import { ReactNode } from "react";

interface ElementRowsProps {
  line: string;
  children: ReactNode;
}

const ElementRows = ({ line, children }: ElementRowsProps) => {
  return <div className={line}>{children}</div>;
};

export default ElementRows;
