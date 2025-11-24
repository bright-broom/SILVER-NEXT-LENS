import * as React from 'react';

import { cn } from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[140px] w-full rounded-2xl border-2 border-slate-200/50 dark:border-slate-800/50',
          'bg-background/80 backdrop-blur-sm px-5 py-4 text-sm',
          'ring-offset-background placeholder:text-slate-400 dark:placeholder:text-slate-500',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50',
          'focus-visible:border-cyan-500 dark:focus-visible:border-cyan-400',
          'focus-visible:ring-offset-2 focus-visible:shadow-lg',
          'transition-all duration-500 ease-out',
          'hover:border-slate-300 dark:hover:border-slate-700',
          'disabled:cursor-not-allowed disabled:opacity-50 resize-none',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
