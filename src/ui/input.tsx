import * as React from "react";

import { cn } from "../utils/helpers";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "file:bg-transparent flex h-12 w-full rounded-md border border-input bg-tertiary-1 px-3 py-2 text-base text-tertiary-10 ring-offset-background file:border-0 file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-md:h-9 max-md:px-2 max-md:text-sm max-md:focus-visible:ring-offset-1 max-sm:text-xs",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
