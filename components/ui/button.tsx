import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-bold ring-offset-background transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 text-white shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(6,182,212,0.5)] hover:scale-110 hover:-translate-y-1 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg hover:shadow-xl hover:scale-105",
        outline:
          "border-2 border-slate-300/50 dark:border-slate-700/50 bg-background/80 backdrop-blur-sm hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:text-cyan-600 dark:hover:text-cyan-400 shadow-lg hover:shadow-xl hover:scale-105",
        secondary:
          "bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 shadow-lg hover:shadow-xl hover:scale-105",
        ghost: "hover:bg-cyan-500/10 dark:hover:bg-cyan-500/20 hover:text-cyan-600 dark:hover:text-cyan-400 hover:scale-110",
        link: "text-cyan-600 dark:text-cyan-400 underline-offset-4 hover:underline hover:text-cyan-500 dark:hover:text-cyan-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
