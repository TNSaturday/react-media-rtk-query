import className from "classnames";
import Button, { ButtonProps } from "./Button";

export function Warning({ children, outline, rounded, ...rest }: ButtonProps) {
  const classes = className(
    "border-yellow-400",
    {
      "text-white bg-yellow-400": !outline,
      "text-yellow-400": outline,
    },
    rest.className
  );
  return (
    <Button outline={outline} rounded={rounded} {...rest} className={classes}>
      {children}
    </Button>
  );
}
