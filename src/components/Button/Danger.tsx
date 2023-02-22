import className from "classnames";
import Button, { ButtonProps } from "./Button";

export function Danger({ children, outline, rounded, ...rest }: ButtonProps) {
  const classes = className(
    "border-red-500",
    {
      "text-white bg-red-500": !outline,
      "text-red-500": outline,
    },
    rest.className
  );
  return (
    <Button outline={outline} rounded={rounded} {...rest} className={classes}>
      {children}
    </Button>
  );
}
