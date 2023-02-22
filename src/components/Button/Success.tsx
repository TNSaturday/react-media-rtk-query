import className from "classnames";
import Button, { ButtonProps } from "./Button";

export function Success({ children, outline, rounded, ...rest }: ButtonProps) {
  const classes = className(
    "border-green-500",
    {
      "text-white bg-green-500": !outline,
      "text-green-500": outline,
    },
    rest.className
  );
  return (
    <Button outline={outline} rounded={rounded} {...rest} className={classes}>
      {children}
    </Button>
  );
}
