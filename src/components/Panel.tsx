import classNames from "classnames";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface PanelProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

function Panel({ children, className, ...rest }: PanelProps) {
  const finalClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );

  return (
    <div data-testid="panel" {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

export default Panel;
