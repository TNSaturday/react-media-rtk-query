import className from "classnames";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Danger } from "./Danger";
import { Primary } from "./Primary";
import { Secondary } from "./Secondary";
import { Success } from "./Success";
import { Warning } from "./Warning";
import { GoSync } from "react-icons/go";

export interface ButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  className?: string;
  rounded?: boolean;
  outline?: boolean;
  loading?: boolean;
}

function Button({ children, outline, rounded, loading, ...rest }: ButtonProps) {
  const classes = className(
    "flex items-center px-3 py-1.5 border h-8",
    {
      "opacity-80": loading,
      "rounded-full": rounded,
      "bg-white": outline,
    },
    rest.className
  );

  return (
    <button
      disabled={loading}
      data-testid="defaultButton"
      {...rest}
      className={classes}
    >
      {loading ? <GoSync className="animate-spin" /> : children}
    </button>
  );
}

Button.Primary = Primary;
Button.Secondary = Secondary;
Button.Success = Success;
Button.Warning = Warning;
Button.Danger = Danger;

export default Button;
