// import * as React from "react"
// import { cn } from "@/lib/utils"


// interface InputProps extends React.ComponentProps<"input"> {
//   leftIcon?: React.ReactNode;
//   rightIcon?: React.ReactNode;
//   iconGap?: string; 
// }

// function Input({ className,  leftIcon, rightIcon, type, ...props }: InputProps) {
//   return (
//     <div className={cn(`relative w-full`)}>
//       {!!leftIcon && (
//         <div className="absolute left-3 top-[50%] -translate-y-[50%]">
//           {leftIcon}
//         </div>
//       )}
//     <input
//       type={type}
//       data-slot="input"
//       className={cn(
//         "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
//         "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
//         "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
//         className
//       )}
//       {...props}
//     />
//     {!!rightIcon && (
//         <div className="absolute right-3 top-[50%] -translate-y-[50%]">
//           {rightIcon}
//         </div>
//       )}
//        </div>
//   )
// }

// export { Input }



import * as React from "react";

import { cn } from "@/lib/utils";
interface InputProps extends React.ComponentProps<"input"> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  iconGap?: string; 
}



function Input({ className, leftIcon, rightIcon, iconGap = "pl-10", type, value = "", ...props }: InputProps) {
  return (
    <div className={cn(`relative w-full`)}>
      {!!leftIcon && (
        <div className="absolute left-3 top-[50%] -translate-y-[50%]">
          {leftIcon}
        </div>
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          "border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          leftIcon && iconGap,
          rightIcon && "pr-10",
          className
        )}
        value={value} // Always provide a value, even if empty
        {...props}
      />
      {!!rightIcon && (
        <div className="absolute right-3 top-[50%] -translate-y-[50%]">
          {rightIcon}
        </div>
      )}
    </div>
  );
}

export { Input };

