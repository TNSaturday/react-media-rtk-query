import className from "classnames";
import Button, { ButtonProps } from "./Button";

export function Secondary({
  children,
  outline,
  rounded,
  ...rest
}: ButtonProps) {
  const classes = className(
    "border-gray-900",
    {
      "text-white bg-gray-900": !outline,
      "text-gray-900": outline,
    },
    rest.className
  );
  return (
    <Button outline={outline} rounded={rounded} {...rest} className={classes}>
      {children}
    </Button>
  );
}
