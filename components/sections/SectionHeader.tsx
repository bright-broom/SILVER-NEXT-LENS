import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string | ReactNode;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function SectionHeader({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn('text-center mb-12 sm:mb-16 md:mb-20', className)}>
      {typeof title === 'string' ? (
        <h2
          className={cn(
            'text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight',
            titleClassName
          )}
        >
          {title}
        </h2>
      ) : (
        <div className={cn('mb-4 sm:mb-6', titleClassName)}>{title}</div>
      )}
      {description && (
        <p
          className={cn(
            'text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed',
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

