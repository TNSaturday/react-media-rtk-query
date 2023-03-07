import { useState, DetailedHTMLProps, HTMLAttributes } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

interface IExpandablePanelProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  header: React.ReactNode;
  children: React.ReactNode;
}

function ExpandablePanel({ header, children }: IExpandablePanelProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center">
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
        <div
          className="cursor-pointer"
          role="presentation"
          onKeyDown={handleClick}
          onClick={handleClick}
        >
          {isOpen ? <GoChevronUp /> : <GoChevronDown />}
        </div>
      </div>
      {isOpen && <div className="p-2 border-t">{children}</div>}
    </div>
  );
}

export default ExpandablePanel;
