import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-14 w-full rounded-2xl border-2 border-slate-200/50 dark:border-slate-800/50',
          'bg-background/80 backdrop-blur-sm px-5 py-4 text-sm',
          'ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
          'placeholder:text-slate-400 dark:placeholder:text-slate-500',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50',
          'focus-visible:border-cyan-500 dark:focus-visible:border-cyan-400',
          'focus-visible:ring-offset-2 focus-visible:shadow-lg',
          'transition-all duration-500 ease-out',
          'hover:border-slate-300 dark:hover:border-slate-700',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
