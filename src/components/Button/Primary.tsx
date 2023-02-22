import className from "classnames";
import Button, { ButtonProps } from "./Button";

export function Primary({ children, outline, rounded, ...rest }: ButtonProps) {
  const classes = className(
    "border-blue-500",
    {
      "text-white bg-blue-500": !outline,
      "text-blue-500": outline,
    },
    rest.className
  );
  return (
    <Button
      data-testid="primaryButton"
      outline={outline}
      rounded={rounded}
      {...rest}
      className={classes}
    >
      {children}
    </Button>
  );
}
